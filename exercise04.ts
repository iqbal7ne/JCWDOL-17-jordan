// ● Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// ● Parameters : height → triangle height
// ● Example input: 5

let height: number = 6;
let arr: number[] = [];

function triangle(height: number) {
  for (let i = 1; i < height + 1; i++) {
    arr.push(i);
    console.log(arr);
  }
}

triangle(height);

// ● Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

let n: number = 15;
let array: (string | number)[] = [];

function FizzBuzz(n: number) {
  for (let i = 1; i < n + 1; i++) {
    if (i % 15 == 0) {
      array.push("FizzBuzz");
    } else if (i % 5 == 0) {
      array.push("Buzz");
    } else if (i % 3 == 0) {
      array.push("Fizz");
    } else {
      array.push(i);
    }
  }
  console.log(array);
}

FizzBuzz(n);

// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

let weight: number = 54;
let tinggi: number = 1.6;

function BMI(weight: number, tinggi: number) {
  let BMI: number = weight / (tinggi * tinggi);
  if (BMI < 18.5) {
    console.log(BMI, `= less weight`);
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log(BMI, `= ideal`);
  } else if (BMI >= 25 && BMI <= 29.9) {
    console.log(BMI, `= overweight`);
  } else if (BMI >= 30 && BMI <= 39.9) {
    console.log(BMI, `= very overweight`);
  } else if (BMI > 39.9) {
    console.log(BMI, `= obesity`);
  }
}

BMI(weight, tinggi);

// ● Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddnumber: number[] = numbers.filter((number) =>
  !(number % 2) ? true : false
);
console.log(oddnumber);

// ● Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

let hey: string = "Hello World";
console.log(hey.split(" "));
