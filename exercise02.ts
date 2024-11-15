// ● Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

let Numb: number = 25;

if (Numb % 2 > 0) {
  console.log(`${Numb} is odd number`);
} else {
  console.log(`${Numb} is even number`);
}

// ● Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

let primeNum: number = 7;

if (primeNum > 1 && primeNum < 3) {
  console.log(`${primeNum} is prim number`);
}

console.log(primeNum);

// ● Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6

let numb: number = 5;
let sum: number = 0;

for (let i = 0; i <= numb; i++) {
  sum += i;
}

console.log(`${numb} -> `, sum);

// ● Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

let total: number = 1;

for (let i = 0; i == 0; --i) {
  total = total * i;
  console.log(i);
}

console.log(total);

// ● Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610
