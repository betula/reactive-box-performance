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

Init time:
Mean: 4.275770202279091
Median: 3.9974055141210556
Harmonic mean: 2.116516960660523
Geometric mean: 3.113937485642409

Work time:
Mean: 16.20349990129471
Median: 11.347505003213882
Harmonic mean: 11.018207577758941
Geometric mean: 13.04058030559408
Memory used (MB):
rss: 22.73
heapTotal: 6.29
heapUsed: 3.81
external: 0.79
```

My results for reactive-box (time in ms)
```
Boxes: 512
Selectors: 510

Init time:
Mean: 1.605365201830864
Median: 1.0605450123548508
Harmonic mean: 0.9389308824567293
Geometric mean: 1.1657280274921278

Work time:
Mean: 11.592868700623512
Median: 7.418783485889435
Harmonic mean: 8.401265682879352
Geometric mean: 9.416944758819566
Memory used (MB):
rss: 21.75
heapTotal: 6.04
heapUsed: 2.6
external: 0.62
```
