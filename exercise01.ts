// Write a code to find area of rectangle.
// ○ Example : length = 5, width = 3
// ○ Output : 15

console.log(`===== Jawaban Nomor 1 =====`);
let Length: number = 5;
let Width: number = 3;
let Luas: number = Length * Width;
console.log(`Luasnya = `, Luas);

// ● Write a code to find perimeter of rectangle.
// ○ Example : length = 5, width = 3
// ○ Output : 16

console.log(`===== Jawaban nomor 2 =====`);
let Keliling: number = (Length + Width) * 2;
console.log(`Keliling nya =`, Keliling);

// ● Write a code to find diameter, circumference and area of a circle.
// ○ Example : radius = 5
// ○ Output : diameter = 10, circumference = 31.4159, area = 78.539

console.log(`===== Jawaban nomor 3 =====`);
let Radius: number = 5;
let Phi: number = 3.14159;
const Diameter: number = Radius * 2;
const Circumference: number = Diameter * Phi;
const Area: number = Phi * Radius ** 2;

console.log("Diameter = ", Diameter);
console.log(`Keliling = `, Circumference);
console.log(`Luas =`, Area);

// ● Write a code to find angles of triangle if two angles are given.
// ○ Example : a = 80, b = 65
// ○ Output : 35

console.log(`===== Jawaban nomor 4 =====`);
let a: number = 80;
let b: number = 65;
const c: number = 180 - a - b;

console.log(`third angle of triangle =`, c);

// ● Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30
// days).
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ Example: 366 days → 1 year, 0 month, 1 days

console.log(`===== Jawaban nomor 5 =====`);
let Input: number = 366;
let NumYear: number = Math.floor(Input / 365);
let NumMonth: number = Math.floor((Input % 365) / 30);
let NumDay: number = Math.floor((Input % 365) % 30);
console.log(NumYear, ` Year, `, NumMonth, ` month, `, NumDay, ` days`);

// ● Write a code to get difference between dates in days.
// ○ Example : date1 = 2022-01-20, date2 = 2022-01-22
// ○ Output : 2

console.log(`===== Jawaban nomor 6 =====`);
let Date1: Date = new Date(`2022-01-20`);
let Date2: Date = new Date(`2022-01-22`);
let Date3: number = Math.abs(Date2.getTime() - Date1.getTime());
let Date4: number = Date3 / 24 / 3600 / 1000;
console.log(Date4, ` Days`);
