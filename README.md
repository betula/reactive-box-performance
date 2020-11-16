Simple performance test for reactive-box.

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
Op1: 131328 	time: 50.83466398715973
Op2: 393472 	time: 17.49718302488327
Op3: 655616 	time: 18.02100497484207
Op4: 917760 	time: 19.905611038208008
Op5: 1179904 	time: 8.603410959243774
Op6: 1442048 	time: 6.0513710379600525
Op7: 1704192 	time: 8.508432984352112
Op8: 1966336 	time: 10.305613040924072
Op9: 2228480 	time: 11.979978024959564
Op10: 2490624 	time: 6.310401976108551
Init time: 8.993691980838776
Boxes: 512
Selectors: 510
Mean: 15.80176710486412
Median: 11.142795532941818
Harmonic mean: 10.863160519162095
Geometric mean: 12.71113561718402
```

My results for reactive-box (time in ms)
```
Op1: 131328 	time: 23.880064010620117
Op2: 393472 	time: 6.918640971183777
Op3: 655616 	time: 5.287490963935852
Op4: 917760 	time: 6.728749990463257
Op5: 1179904 	time: 5.433719992637634
Op6: 1442048 	time: 6.218472003936768
Op7: 1704192 	time: 8.938637018203735
Op8: 1966336 	time: 6.329248011112213
Op9: 2228480 	time: 11.66354101896286
Op10: 2490624 	time: 6.7197020053863525
Init time: 1.303954005241394
Boxes: 512
Selectors: 510
Mean: 8.811826598644256
Median: 6.724225997924805
Harmonic mean: 7.281063555467454
Geometric mean: 7.843005327813933
```
