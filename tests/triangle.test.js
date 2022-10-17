/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { Triangle } = require('../src/triangle');

test('Triangle', () => {
  const triangle = new Triangle([3, 4, 5]);
  expect(typeof triangle).toBe('object');
  expect(triangle.perimeter()).toBe(12);
  expect(triangle.isValid()).toBe(true);
  expect(triangle.sayName()).toBe('Triangle');
  //
  const t0 = new Triangle([1, 4, 5]);
  expect(t0.isValid()).toBe(false);
  const t1 = new Triangle([-3, 4, 5]);
  expect(t1.isValid()).toBe(false);

  const t2 = new Triangle([3, 4, 5]);
  expect(t2.count()).toBe(3);
});
