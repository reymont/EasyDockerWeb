//
// Retrieve logs for a pod.
//
const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;

async function main() {
  try {

    const client = new Client({
      config: config.fromKubeconfig(),
      version: '1.9'
    });

  //   var query = {
  //     stdout: stdout != null,
  //     stderr: stderr != null,
  //     stdin: stdin != null,
  //     tty: tty,
  //     command: command,
  //     container: containerName
  // };

    // Pod with single container
    let execs = await client.api.v1.namespaces('test01').pods('dubbo-admin-fp94l').exec
      .get({
        command: "ls",
        container: "dubbo-admin",
        stderr: 1,
        stdout: 1,
        stdin: 1,
        tty: true
      });
    console.log(execs.body);

  } catch (err) {
    console.error('Error: ', err);
  }
}

main();