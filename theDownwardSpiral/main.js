shape(() => Math.sin(time) + 0.312 * 0.212, 0.057, 0.025)
  .repeat(9.006, 2.204, 0 , 0)
  .scrollY(0.14, 0.098)
  .layer(src(o1)
    .mask(o0)
    .luma(0.012, 0)
    .invert(0.463))
  .modulate(o1, 0.007)
  .out(o0);
osc(3.772, 0, 0.199)
  .color(1.341, 1.116, 9.797)
  .modulate(osc(10.979)
    .rotate(0.529, 0.426))
  .rotate(1.058, 0.156)
  .out(o1);
src(o0)
  .rotate(0.496)
  .scale(() => Math.sin(time * 0.004) * 0.022 + 0.843)
  .modulate(osc(8.096, 0.046, Math.random(4.641))
    .rotate(() => Math.sin(time * 0.225)))
  .mask(o1, 4.321, 0.043)
  .blend(o1, 0.125)
  .out();