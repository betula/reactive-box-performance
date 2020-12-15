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
Op1: 131328 	time: 50.37892001867294
Op2: 393472 	time: 12.98276299238205
Op3: 655616 	time: 17.08261001110077
Op4: 917760 	time: 26.859324991703033
Op5: 1179904 	time: 11.46228301525116
Op6: 1442048 	time: 18.59416002035141
Op7: 1704192 	time: 22.009830951690674
Op8: 1966336 	time: 12.029384970664978
Op9: 2228480 	time: 8.570963978767395
Op10: 2490624 	time: 10.55450701713562
Init time: 9.904317021369934
Boxes: 512
Selectors: 510
Mean: 19.052474796772003
Median: 15.03268650174141
Harmonic mean: 14.84447962840654
Geometric mean: 16.539564678948906
```

My results for reactive-box (time in ms)
```
Op1: 131328 	time: 21.673797011375427
Op2: 393472 	time: 9.208314955234528
Op3: 655616 	time: 10.86957597732544
Op4: 917760 	time: 7.820222020149231
Op5: 1179904 	time: 13.316179990768433
Op6: 1442048 	time: 16.27625399827957
Op7: 1704192 	time: 17.095314979553223
Op8: 1966336 	time: 16.305137991905212
Op9: 2228480 	time: 14.79539704322815
Op10: 2490624 	time: 9.471655011177063
Init time: 2.442799985408783
Boxes: 512
Selectors: 510
Mean: 13.683184897899627
Median: 14.055788516998291
Harmonic mean: 12.435673859460625
Geometric mean: 13.053395745031162
```
