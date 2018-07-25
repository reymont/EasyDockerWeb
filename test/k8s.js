

const k8s = require('@kubernetes/client-node');

var k8sApi = k8s.Config.defaultClient();
k8sApi.listNamespacedPod('test01')
    .then((res) => {
        console.log(res.body);
        var pods = res.body.items;
        for(var i = 0;i<pods.length;i++){
            console.log(pods[i].metadata.name);
        }
    });