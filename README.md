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
Op1: 131328 	time: 42.303553998470306
Op2: 393472 	time: 14.313249945640564
Op3: 655616 	time: 12.742738008499146
Op4: 917760 	time: 12.6752650141716
Op5: 1179904 	time: 13.73903501033783
Op6: 1442048 	time: 23.764550030231476
Op7: 1704192 	time: 7.6595540046691895
Op8: 1966336 	time: 15.680608987808228
Op9: 2228480 	time: 9.23641300201416
Op10: 2490624 	time: 13.276445984840393
Init time: 7.325947999954224
Boxes: 512
Selectors: 510
Mean: 16.53914139866829
Median: 13.507740497589111
Harmonic mean: 13.44707529035481
Geometric mean: 14.697288942150603
```

My results for reactive-box (time in ms)
```
Op1: 131328 	time: 27.143760979175568
Op2: 393472 	time: 6.561695992946625
Op3: 655616 	time: 6.268050968647003
Op4: 917760 	time: 7.105120003223419
Op5: 1179904 	time: 7.467077016830444
Op6: 1442048 	time: 6.638237953186035
Op7: 1704192 	time: 10.86779499053955
Op8: 1966336 	time: 9.802361011505127
Op9: 2228480 	time: 16.921434998512268
Op10: 2490624 	time: 7.124485969543457
Init time: 2.3541699647903442
Boxes: 512
Selectors: 510
Mean: 10.59000198841095
Median: 7.295781493186951
Harmonic mean: 8.564754631232908
Geometric mean: 9.339543231178142
```
