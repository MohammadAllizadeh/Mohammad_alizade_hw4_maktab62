let oldArray = [10, [25, 13,[5]], 1458,[1],[892], 2];
let newArray = Array.prototype.concat.apply([], oldArray);
console.log(newArray)