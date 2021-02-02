Simple performance test for [reactive-box](https://github.com/betula/reactive-box).

Schema of test data struct:

```
expr = selector = selector = box
                           = box
                = selector = box
                           = box
     = selector = selector = box
                           = box
                = selector = box
                           = box
```

In performance stand used deep value of 8, that 512 boxes and 510 selectors.

<hr>

Install

```bash
npm i
```

Run reactive-box implementation
```bash
npm run test:reactive-box
```

Run MobX implementation
```bash
npm run test:mobx
```

Enjoy!

<hr>

My results for MobX (time in ms)
```
Boxes: 512
Selectors: 510
Init time: 7.8504529893398285
Operations count: 5110
Work time:
Mean: 18.652117204666137
Median: 9.010176002979279
Harmonic mean: 11.013331242055317
Geometric mean: 13.712331951447158
Memory used (MB):
rss: 22.72
heapTotal: 6.29
heapUsed: 3.81
external: 0.79
```

My results for reactive-box (time in ms)
```
Boxes: 512
Selectors: 510
Init time: 2.7363439798355103
Operations count: 5110
Work time:
Mean: 11.636045795679092
Median: 7.705490976572037
Harmonic mean: 9.06073900210349
Geometric mean: 10.032534424729
Memory used (MB):
rss: 21.7
heapTotal: 6.04
heapUsed: 2.6
external: 0.62
```
