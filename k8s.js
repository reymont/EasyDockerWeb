

const k8s = require('@kubernetes/client-node');

var k8sApi = k8s.Config.defaultClient();
k8sApi.listNamespacedPod('test01')
    .then((res) => {
        console.log(res.body);
        // console.log(res.body.items);
    });