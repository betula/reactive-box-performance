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
Op1: 131328 	time: 50.53668999671936
Op2: 393472 	time: 14.026151955127716
Op3: 655616 	time: 8.368234992027283
Op4: 917760 	time: 7.54508900642395
Op5: 1179904 	time: 21.03567200899124
Op6: 1442048 	time: 18.267055988311768
Op7: 1704192 	time: 17.610588014125824
Op8: 1966336 	time: 16.278923988342285
Op9: 2228480 	time: 10.81208199262619
Op10: 2490624 	time: 6.13119500875473
Init time: 7.434280037879944
Boxes: 512
Selectors: 510
Mean: 17.061168295145034
Median: 15.152537971735
Harmonic mean: 12.206981888039314
Geometric mean: 14.172036202828199
```

My results for reactive-box (time in ms)
```
Op1: 131328 	time: 19.5714750289917
Op2: 393472 	time: 6.675382018089294
Op3: 655616 	time: 6.878369987010956
Op4: 917760 	time: 13.151836037635803
Op5: 1179904 	time: 7.851278007030487
Op6: 1442048 	time: 11.530430972576141
Op7: 1704192 	time: 10.598459005355835
Op8: 1966336 	time: 8.960426032543182
Op9: 2228480 	time: 17.744269967079163
Op10: 2490624 	time: 11.374235987663269
Init time: 2.386742949485779
Boxes: 512
Selectors: 510
Mean: 11.433616304397583
Median: 10.986347496509552
Harmonic mean: 10.13539428695073
Geometric mean: 10.74461664862022
```
