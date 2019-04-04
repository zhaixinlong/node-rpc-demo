'use strict';

const { RpcClient } = require('sofa-rpc-node').client;
const { ZookeeperRegistry } = require('sofa-rpc-node').registry;
const logger = console;

// 1. 创建 zk 注册中心客户端
const registry = new ZookeeperRegistry({
  logger,
  address: '127.0.0.1:2181',
});

// 2. 创建 RPC Client 实例
const client = new RpcClient({
  logger,
  registry,
});
// 3. 创建服务的 consumer
const consumer = client.createConsumer({
  interfaceName: 'com.nodejs.test.TestService',
});

// 4. 等待 consumer ready（从注册中心订阅服务列表...）
consumer.ready();

module.exports = consumer;