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
Op1: 131328 	time: 47.63222000002861
Op2: 393472 	time: 9.439884006977081
Op3: 655616 	time: 17.283953994512558
Op4: 917760 	time: 7.934078007936478
Op5: 1179904 	time: 7.923961013555527
Op6: 1442048 	time: 10.147347003221512
Op7: 1704192 	time: 14.433063000440598
Op8: 1966336 	time: 10.038679003715515
Op9: 2228480 	time: 13.025350004434586
Op10: 2490624 	time: 7.393451005220413
Boxes: 512
Selectors: 510
Init time: 7.2872240245342255
Work time:
Mean: 14.525198704004287
Median: 10.093013003468513
Harmonic mean: 10.911085196421494
Geometric mean: 12.133814653164402
Memory used (MB):
rss: 22.68
heapTotal: 6.29
heapUsed: 3.81
external: 0.79
```

My results for reactive-box (time in ms)
```
Op1: 131328 	time: 27.424579977989197
Op2: 393472 	time: 7.0499440133571625
Op3: 655616 	time: 10.083506017923355
Op4: 917760 	time: 7.292598009109497
Op5: 1179904 	time: 10.769385010004044
Op6: 1442048 	time: 8.201774001121521
Op7: 1704192 	time: 10.645547986030579
Op8: 1966336 	time: 10.690299987792969
Op9: 2228480 	time: 12.778806000947952
Op10: 2490624 	time: 10.159544974565506
Boxes: 512
Selectors: 510
Init time: 4.109144002199173
Work time:
Mean: 11.509598597884178
Median: 10.402546480298042
Harmonic mean: 10.06492384951436
Geometric mean: 10.637609998528742
Memory used (MB):
rss: 21.75
heapTotal: 6.04
heapUsed: 2.6
external: 0.62
```
