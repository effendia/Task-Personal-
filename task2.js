function sortArray(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr.join("");
}

// Input array
let inputArray = [
  "u",
  "D",
  "m",
  "w",
  "b",
  "a",
  "y",
  "s",
  "i",
  "s",
  "w",
  "a",
  "e",
  "s",
  "e",
  "o",
  "m",
  " ",
  " ",
];
console.log(sortArray(inputArray));
