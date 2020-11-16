const { performance } = require('perf_hooks');
const stat = require('simple-statistics');
const { box, sel, expr } = require('reactive-box');

const boxes = [];
let answer;
let time, init_time;
const times = [];

function level(deep) {
  if (deep === 0) {
    const x = box(0);
    boxes.push(x);
    return x;
  };

  const a = level(deep - 1);
  const b = level(deep - 1);
  return sel(() => a[0]() + b[0]());
}

function make(deep) {
  const a = level(deep);
  const b = level(deep);
  expr(() => (answer = a[0]() + b[0]()))[0]();
}

function init(deep) {
  init_time = performance.now();
  make(deep);
  init_time = performance.now() - init_time;
}

function op(ind) {
  let total = 0, i = 0, len = boxes.length;

  time = performance.now();
  for (;i < len;i++) {
    boxes[i][1](ind + 1);
    total += answer;
  }
  time = performance.now() - time;
  times.push(time);

  console.log(`Op${ind + 1}:`, total, '\ttime:', time);
}

init(8);
for (let i = 0; i < 10; i++) op(i);

console.log('Init time:', init_time);
console.log('Boxes:', boxes.length);
console.log('Selectors:', boxes.length - 2);
console.log('Mean:', stat.mean(times));
console.log('Median:', stat.median(times));
console.log('Harmonic mean:', stat.harmonicMean(times));
console.log('Geometric mean:', stat.geometricMean(times));
