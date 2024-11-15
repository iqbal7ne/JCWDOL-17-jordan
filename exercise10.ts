// ● Create a function to convert Excel sheet column title to its corresponding column number.
// ● Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// …
// ● Example :
// ○ Input : AB
// ○ Output : 28
const excel = (input: string) => {
  let x = input.length;
  let total: number = 0;
  let alphabet: string[] = `abcdefghijklmnopqrstuvwxyz`.split("");
  for (let i = 0; i < x; i++) {
    const element = input[i];
    total = total * 26 + alphabet.indexOf(element);
    console.log(element, `array`, total);
  }
};

excel(`aa`);

const alphabetColumn = (column: string): number => {
  const letterToNumber: { [key: string]: number } = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  let number = 0;
  for (let i = 0; i < column.length; i++) {
    number = number * 26 + letterToNumber[column[i]];
    console.log(`number`, number);
  }
  return number;
};
console.log(`abraham =`, alphabetColumn("BG"));

// ● Given a non-empty array of integers nums, every element appears twice except for one. Find that
// single one.
// ● Example 1:
// ○ Input: nums = [2,2,1]
// ○ Output: 1
// ● Example 2:
// ○ Input: nums = [4,1,2,1,2]
// ○ Output: 4
// ● Example 3:
// ○ Input: nums = [1]
// ○ Output: 1

const nonEmpty = (arr: number[]) => {
  arr.sort((a, b) => a - b);
  let output: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter((n) => n == arr[i]).length == 1) return arr[i];
  }
  console.log(output);
};
// jika menggunakan return, maka harus di console log, jika tidak, maka lebih baik return di ganti menjadi console.log
console.log(nonEmpty([4, 1, 2, 1, 2]));

// ● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// ● Example 1:
// ○ Input: s = "anagram", t = "nagaram"
// ○ Output: true
// ● Example 2:
// ○ Input: s = "rat", t = "car"
// ○ Output: false

const s: string = "anagram";
const t: string = "nagaram";

const anagramF = (s: string, t: string): any => {
  const reasembler1 = s.split("").sort().join("");
  const reasembler2 = t.split("").sort().join("");
  if (reasembler1 === reasembler2) return true;
};

console.log(anagramF(s, t));

// ● You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
// steps. In how many distinct ways can you climb to the top?
// ● Example 1:
// ○ Input: n = 2
// ○ Output: 2
// ○ Explanation: There are two ways to climb to the top.
// ■ 1. 1 step + 1 step
// ■ 2. 2 steps
// ● Example 2:
// ○ Input: n = 3
// ○ Output: 3
// ○ Explanation: There are three ways to climb to the top.
// ■ 1. 1 step + 1 step + 1 step
// ■ 2. 1 step + 2 steps
// ■ 3. 2 steps + 1 step

const climbStaircase = (stairs: number) => {
  let let1: number = 1;
  let let2: number = 1;
  let ways: number = 0;

  if (stairs <= 1) return 0;

  for (let i = 1; i < stairs; i++) {
    ways = let1 + let2;
    let1 = let2;
    let2 = ways;
  }

  return ways;
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
};

console.log(climbStaircase(5));

// *****
// ****
// ***
// **
// *

// *
// **
// ***
// ****
// *****

// *****
//  ****
//   ***
//    **
//     *

//     *
//    **
//   ***
//  ****
// *****

const fourTri = (height: number) => {
  let first: any;
  for (let i = 0; i < height; i++) {
    first += "*";
  }
  console.log(first);
};

fourTri(5);
