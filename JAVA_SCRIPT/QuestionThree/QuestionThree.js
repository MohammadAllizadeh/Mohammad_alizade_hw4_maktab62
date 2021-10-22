let testRy = [
  1,
  2,
  [3, 4, [5, 6], 7, [8, 10]],
  11,
  12,
];
function getArrayDepth(value) {
  return Array.isArray(value) ? 1 + Math.max(...value.map(getArrayDepth)) : 0;
}
console.log("get test array", getArrayDepth(testRy) + 1);
