// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
let arr1: number[] = [12, 5, 23, 18, 4, 45, 32];
let max: number = arr1[0];
let min: number = arr1[0];
let avg: number = 0;
function cek() {
  for (let i = 1; i <= arr1.length; i++) {
    avg += arr1[i - 1];
    if (arr1[i] > max) {
      max = arr1[i];
    }
    if (arr1[i] < min) {
      min = arr1[i];
    }
  }
  console.log(`min = `, min); // Outputs: 4
  console.log(`max = `, max); // Outputs: 45
  console.log(`avg = `, avg / arr1.length); // Outputs: 4
}

cek();

arr1.sort((a, b) => a - b);
console.log(arr1[0]);
console.log(arr1[arr1.length - 1]);

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

const arr2: string[] = ["apple", "banana", "cherry", "date"];
let result: string = arr2.join(", ");
let result2: string = "";
function gabung(arr2: string[]) {
  for (let i = 1; i < arr2.length; i++) {
    result2 = result2 + arr2[i - 1];
  }
  result2 = result2 + arr2[arr2.length - 1];

  console.log(result2);
}
gabung(arr2); // Output: "Banana, Orange, Apple, Mango"
