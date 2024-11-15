// 1
let num: number = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = `, num * i);
}

// 2
let str: String = "cake";
let reverse: string = "";

for (let i = str.length; i >= 0; i--) {
  reverse += str[i];
}
console.log(`it's palindrome`);

// 3 convert cm to km
let cm: number = 100000;
let km: number = cm / 100000;

console.log(`${km} km`);

// 4
let idr: number = 1000;
console.log(`Rp. ${idr.toLocaleString("id-ID")},00`);

// 5
let re: string = "ell";
let hel: string = "Hello World";
let rep: string = hel.replace(re, "");
console.log(rep);

// 6
str = "hello world";
let capitalize: string = "";
for (let i = 0; i < str.length; i++) {
  if (i == 0 || str[i - 1] == " ") {
    capitalize += str[i].toUpperCase();
  } else {
    capitalize += str[i].toLowerCase();
  }
}

console.log(capitalize);
