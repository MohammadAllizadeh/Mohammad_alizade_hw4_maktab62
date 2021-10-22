function reverseString(string) {
//   let splitString = string.split("");
//   let reverseArray = splitString.reverse();
//   let joinArray = reverseArray.join("");
  let newString = string.split('').reverse().join('');
  if (string=== joinArray) {
    console.log("yes");
  } else {
    console.log("No");
  }
  return joinArray;
}

reverseString("Vocation");
