'use strict';
const consumer = require('./src/rpc/rpc-client');
async function test(){
  // 执行调用
  let result = await consumer.invoke('plus', [ 1, 2 ], { responseTimeout: 3000 });
  console.log('client 1 + 2 = ' + result);

  result = await consumer.invoke('Less', [ 1, 2 ], { responseTimeout: 3000 });
  console.log('client 1 - 2 = ' + result);

  result = await consumer.invoke('Multiply', [ 1, 2 ], { responseTimeout: 3000 });
  console.log('client 1 * 2 = ' + result);

  result = await consumer.invoke('Division', [ 1, 2 ], { responseTimeout: 3000 });
  console.log('client 1 / 2 = ' + result);
}

test();