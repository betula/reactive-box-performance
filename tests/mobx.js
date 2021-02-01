const { performance } = require('perf_hooks');
const stat = require('simple-statistics');
const { observable, computed, autorun, action } = require('mobx');

const box = observable.box;
const boxes = [];
let answer;
let time, init_time;
const times = [];

function level(deep) {
  if (deep === 0) {
    const x = box(0, { deep: false });
    boxes.push(x);
    return x;
  };

  const a = level(deep - 1);
  const b = level(deep - 1);
  return computed(() => a.get() + b.get());
}

function make(deep) {
  const a = level(deep);
  const b = level(deep);
  autorun(() => (answer = a.get() + b.get()));
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
    action(() => boxes[i].set(ind + 1))();
    total += answer;
  }
  time = performance.now() - time;
  times.push(time);

  console.log(`Op${ind + 1}:`, total, '\ttime:', time);
}

const memory_used = process.memoryUsage();

init(8);
for (let i = 0; i < 10; i++) op(i);

console.log('Boxes:', boxes.length);
console.log('Selectors:', boxes.length - 2);
console.log('Init time:', init_time);
console.log('Work time:');
console.log('Mean:', stat.mean(times));
console.log('Median:', stat.median(times));
console.log('Harmonic mean:', stat.harmonicMean(times));
console.log('Geometric mean:', stat.geometricMean(times));

console.log("Memory used (MB):");
for (let key in memory_used) {
  console.log(
    `${key}: ${Math.round((memory_used[key] / 1024 / 1024) * 100) / 100}`
  );
}
