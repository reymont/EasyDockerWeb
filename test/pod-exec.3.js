const WebSocket = require('ws');

function exec(apiUri, namespace, pod, cmd, callback) {
    var response = '', uri = '';

    uri += `wss://${apiUri}/api/v1/namespaces/${namespace}/pods/${pod}/exec?`;
    uri += 'stdout=1&stdin=1&stderr=1';
    cmd.forEach(subCmd => uri += `&command=${encodeURIComponent(subCmd)}`);

    var ws = new WebSocket(uri, "base64.channel.k8s.io")
    ws.on('message', (data) => {
        if (data[0].match(/^[0-3]$/)) {
            response += Buffer.from(data.slice(1), 'base64').toString("ascii");
        }
    });
    ws.on('close', () => callback(response));
}

exec(
    '172.20.62.78:6443',
    'default',
    'pod-name',
    ['/bin/sh', '-c', 'df -h | grep device'],
    (response) => {
        console.log(response);
    }
)