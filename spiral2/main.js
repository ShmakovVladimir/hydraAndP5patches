osc(2, 0.2, 4)
  .diff(osc(5, 0.1, () => Math.cos(time * 0.25) * 2 + 2)
    .rotate(Math.PI/2 ))
  .out(o1);
src(o0)
  .scale(() => 0.85 + Math.sin(time * 0.1) * 0.05)
  .modulateRotate(noise(0.1, 0.01))
  .blend(o1, 0.1)
  .contrast(1.05)
  .out();
