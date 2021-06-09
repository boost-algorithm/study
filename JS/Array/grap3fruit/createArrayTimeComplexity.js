const startA = new Date().getTime();
const arr = new Array(1000000).fill(-1);
const endA = new Date().getTime();
console.log('array fill: ', endA - startA);

const startB = new Date().getTime();
const arrB = Array.from({ length: 1000000 }, (v, i) => i);
const endB = new Date().getTime();
console.log('array from: ', endB - startB);

const startC = new Date().getTime();
const arrC = [...new Array(1000000).keys()];
const endC = new Date().getTime();
console.log('array spread: ', endC - startC);
