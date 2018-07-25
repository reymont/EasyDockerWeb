k8s = require('@kubernetes/client-node');

let kc = new k8s.KubeConfig();
kc.loadFromFile(process.env['HOME'] + '/.kube/config');

let exec = new k8s.Exec(kc);
exec.exec('test01', 'dubbo-admin-fp94l', 'dubbo-admin', "ls", process.stdout, process.stderr, process.stdin, true /* tty */);