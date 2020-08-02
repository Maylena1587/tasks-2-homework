function mapArray(array) {
  const numbers = new Array(array.length);

  for (let i = 0; i < array.length; i += 1) {
    numbers[0] = array[0] * 10;
    numbers[1] = array[1] * 10;
    numbers[2] = array[2] * 10;
  }
  return numbers;
}

console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]
