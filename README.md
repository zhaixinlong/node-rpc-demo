# node-rpc-demo
node-rpc-demo by sofa-rpc-node


## 准备工作

### 安装 zookeeper
```
$ npm install sofa-rpc-node --save
```

安装并启动 zookeeper
sofa-rpc-node 默认的注册中心实现基于 zookeeper，所以需要先启动一个 zookeeper 实例


从 Homebrew 安装（macOs）
```
$ brew install zookeeper
```
启动 zk server（默认端口为 2181）

```
$ zkServer start
ZooKeeper JMX enabled by default
Using config: /usr/local/etc/zookeeper/zoo.cfg
Starting zookeeper ... STARTED
```
