function sum(arr) {
  let sum = 0;
  arr.forEach((num) => (sum += Number(num)));
  return sum;
}

export { sum };
