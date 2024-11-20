type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  const res: number[] = [];
  let numb: number;
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(
  filter([1, 2, 3, 4], function greaterThan10(n) {
    return n > 10;
  })
);
