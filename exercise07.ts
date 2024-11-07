// soal nomor 1

function areObjectsEqual(obj1: any, obj2: any) {
  // Check if both arguments are objects
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys is different
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if all keys and values are the same
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// Example usage:
const obj1 = { a: 2 };
const obj2 = { a: "Hello" };
const obj3 = { a: 1 };

console.log(Object.keys(obj1));
console.log(typeof obj1);

console.log(areObjectsEqual(obj1, obj2)); // false
console.log(areObjectsEqual(obj1, obj3)); // false
console.log(areObjectsEqual(obj2, obj3)); // false
console.log(areObjectsEqual(obj3, obj3)); // true

// soal nomor 2
// Function to get the intersection of two objects

// soal shooting game
class ShootingGame {
  constructor(player1, player2) {}
}
