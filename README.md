# EasyDockerWeb

A simple Web Ui for Docker using `xterm.js`, `Node.js` and `Socket.io`

- 简单就是简单没有复杂的功能，没有学习成本
- 复杂功能 请[https://portainer.io/](https://portainer.io/)

## Quick start


```bash
npm install -g yarn
### 保存到package.json
npm i @kubernetes/client-node -save
npm i kubernetes-client --save

docker run -it -d -p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock qfdk/easydockerweb

### 2. k8s
copy /root/.kube/config -> C:\Users\<username>\.kube\config

```

[http://localhost:3000](http://localhost:3000) enjoy ;)

## Requirement

- Node.js
- Docker remote api >= v1.24
- macOs or Linux or windows

## Then

```bash
git clone https://github.com/qfdk/EasyDockerWeb.git
cd EasyDockerWeb
npm i 
npm start
```

## Build your docker image

```bash
docker build -t easy-docker-web .
docker run -p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock easy-docker-web
```
## Images

![overview](./images/overview.png)

![terminal](./images/terminal.png)

![newContainer](./images/newContainer.png)

![containers](./images/containers.png)

![images](./images/images.png)

![pull](./images/pull.png)

![pull2](./images/pull2.png)
