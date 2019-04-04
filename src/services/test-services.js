'use strict';

async function plus(a, b) {
  console.log('service a + b',a, b);
  return a + b;
}

async function Less(a, b) {
  console.log('service a - b',a, b);
  return a - b;
}

async function Multiply(a, b) {
  console.log('service a * b',a, b);
  return a * b;
}

async function Division(a, b) {
  console.log('service a / b',a, b);
  return a / b;
}


module.exports = {
  plus:plus,
  Less:Less,
  Multiply:Multiply,
  Division:Division
};