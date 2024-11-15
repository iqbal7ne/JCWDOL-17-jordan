// ● Given an array nums of size n, return the majority element. The majority element is the element that
// appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// ● Example 1:
// ○ Input: nums = [3,2,3]
// ○ Output: 3
// ● Example 2:
// ○ Input: nums = [2,2,1,1,1,2,2]
// ○ Output: 2
// Exercise

function mode(arr: number[]) {
  if (arr.length == 0) return null;
  let modeMap: any = {};
  let maxEl = arr[0],
    maxCount = 1;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    console.log(`for = `, el, `dan`, modeMap[el]);

    if (modeMap[el] == null) {
      modeMap[el] = 1;
      console.log(`if true =`, modeMap[el]);
    } else {
      modeMap[el]++;
      console.log(`if false =`, modeMap[el]);
    }

    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
      console.log(`last if`, maxEl, `dan`, maxCount);
    }
    console.log(`modemap = `, modeMap);
  }
  return maxEl;
}

console.log(mode([1, 2, 3, 2]));

// ● Create a function to convert roman numeral to integer.
// ● Example 1:
// ○ Input: s = "III”
// ○ Output: 3
// ○ Explanation: III = 3.
// ● Example 2:
// ○ Input: s = "LVIII"
// ○ Output: 58
// ○ Explanation: L = 50, V= 5, III = 3.
// ● Example 3:
// ○ Input: s = "MCMXCIV"
// ○ Output: 1994
// ○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const romanization = (numb: number) => {
  let lookup: any = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman: string = "";
  let i: string = "";
  for (i in lookup) {
    while (numb >= lookup[i]) {
      roman += i;
      numb -= lookup[i];
    }
  }
  return roman;
};

console.log(romanization(899));

// Exercise
// ● Given an integer numRows, return the first numRows of
// Pascal's triangle.
// ● In Pascal's triangle, each number is the sum of the two
// numbers directly above it as shown →
// ● Example 1:
// ○ Input: numRows = 5
// ○ Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// ● Example 2:
// ○ Input: numRows = 1
// ○ Output: [[1]]

function generate(numRows: number): number[][] {
  let triangle: number[][] = [];
  let y = 0;

  while (y < numRows) {
    // row 1
    if (y === 0) {
      triangle.push([1]);
      console.log(`first`, triangle);
    }
    // row 2
    else if (y === 1) {
      triangle.push([1, 1]);
      console.log(`2nd`, triangle);
    }
    // row n+1
    else {
      let x = 0;
      let row = [1];

      while (x < y - 1) {
        row.push(triangle[y - 1][x] + triangle[y - 1][x + 1]);
        x += 1;
      }
      row.push(1);
      console.log(row);

      triangle.push(row);
    }
    y += 1;
  }

  return triangle;
}

console.log(generate(10));

// Exercise
// ● You are given an array prices where prices[i] is the price of a given stock on the ith day.
// ● You want to maximize your profit by choosing a single day to buy one stock and choosing a different
// day in the future to sell that stock.
// ● Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
// return 0.
// ● Example 1:
// ○ Input: prices = [7,1,5,3,6,4]
// ○ Output: 5
// ○ Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// ○ Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you
// sell.
// ● Example 2:
// ○ Input: prices = [7,6,4,3,1]
// ○ Output: 0
// ○ Explanation: In this case, no transactions are done and the max profit = 0.
