const { performance } = require('perf_hooks');
const stat = require('simple-statistics');
const { observable, computed, autorun, action } = require('mobx');

const box = observable.box;
const boxes = [];
let answer;
let time;
const times = [];
const init_times = [];

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
  time = performance.now();
  make(deep);
  time = performance.now() - time;
  init_times.push(time);
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
}

const memory_used = process.memoryUsage();

for (let i = 0; i < 10; i++) {
  boxes.length = 0;
  init(8);
  op(i);
}

console.log('Boxes:', boxes.length);
console.log('Selectors:', boxes.length - 2);
console.log('');
console.log('Init time:');
console.log('Mean:', stat.mean(init_times));
console.log('Median:', stat.median(init_times));
console.log('Harmonic mean:', stat.harmonicMean(init_times));
console.log('Geometric mean:', stat.geometricMean(init_times));
console.log('');
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
