function sumOfNumbers(inputArray) {
  const num1 = parseFloat(inputArray[0]);
  const num2 = parseFloat(inputArray[1]);
  const num3 = parseFloat(inputArray[2]);

  console.log("Сумата на въведените числа е: " + (num1 + num2 + num3));
  console.log("=======================================================");
}

const inputNumbers = ["10", "20", "30"];
sumOfNumbers(inputNumbers);

function totalSum(prices) {
  let total = 0;

  prices.forEach((price) => {
    total += parseFloat(price);
  });

  const totalDDS = total + 0.2 * total;

  console.log("Сума без ДДС: " + total.toFixed(2));
  console.log("ДДС (20%): " + (0.2 * total).toFixed(2));
  console.log("Крайно салдо: " + totalDDS.toFixed(2));
  console.log("=======================================================");
}

const prices = ["10.50", "20.75", "15.30"];
totalSum(prices);

function countOccurrences(inputArray) {
  const str = inputArray[0];
  const charToCount = inputArray[1];

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === charToCount) {
      count++;
    }
  }

  return count;
}

const input = ["hello", "l"];
const occurrences = countOccurrences(input);
console.log(
  `Буквата "${input[1]}" се среща ${occurrences} пъти в низа "${input[0]}".`,
);
console.log("=======================================================");

function calculateArea(inputArray) {
  const w = parseFloat(inputArray[0]);
  const h = parseFloat(inputArray[1]);
  const W = parseFloat(inputArray[2]);
  const H = parseFloat(inputArray[3]);
  const area1 = w * h;
  const area2 = W * H;
  const totalArea = area1 + area2 - Math.min(w, W) * Math.min(h, H);

  return totalArea;
}

const inputArea = ["2", "4", "5", "3"];
const area = calculateArea(inputArea);
console.log("Площта на фигурата е: " + area);
console.log("=======================================================");

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Yes";
  } else {
    return "No";
  }
}

const year = 1536;
console.log(`${year} е високосна година? ${isLeapYear(year)}`);
console.log("=======================================================");

function printConcatenatedNumbers(n) {
  let concatenatedString = "";
  for (let i = 1; i <= n; i++) {
    concatenatedString += i;
  }

  console.log(concatenatedString);
}

const n = 15;
printConcatenatedNumbers(n);
console.log("=======================================================");

function calculateDistance(coordinates) {
  const point1 = { x: Number(coordinates[0]), y: Number(coordinates[1]) };
  const point2 = { x: Number(coordinates[2]), y: Number(coordinates[3]) };

  const distance = Math.sqrt(
    Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2),
  );

  console.log(
    `Разстоянието между точките (${point1.x}, ${point1.y}) и (${point2.x}, ${
      point2.y
    }) е ${distance.toFixed(2)}.`,
  );
}

calculateDistance([1, 2, 4, 6]);

console.log("=======================================================");

function calculateBoxes(bottles, boxCapacity) {
  const boxesNeeded = Math.ceil(bottles / boxCapacity);
  console.log(
    `Необходими са ${boxesNeeded} кутии, за да се поберат ${bottles} бутилки в кутии с вместимост ${boxCapacity} бутилки.`,
  );
}

calculateBoxes(15, 7);

console.log("=======================================================");

function calculateTriangleArea(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  console.log(`Площта на триъгълника е ${area.toFixed(2)}.`);
}

calculateTriangleArea(5, 7, 8);

console.log("=======================================================");

function calculateCone(radius, height) {
  const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
  const surfaceArea =
    Math.PI *
    radius *
    (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));

  console.log(`Обемът на конуса е: ${volume.toFixed(2)}`);
  console.log(`Повърхността на конуса е: ${surfaceArea.toFixed(2)}`);
}

calculateCone(4, 6);

console.log("=======================================================");

function checkNumber(number) {
  if (isNaN(number) || !Number.isInteger(number)) {
    console.log("Невалидно число.");
    return;
  }

  if (number % 2 === 0) {
    console.log(`${number} е четно число.`);
  } else {
    console.log(`${number} е нечетно число.`);
  }
}

checkNumber(5); // Изход: 5 е нечетно число.
checkNumber(10); // Изход: 10 е четно число.
checkNumber(3.5); // Изход: Невалидно число.

console.log("=======================================================");

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(5)); // Изход: true
console.log(isPrime(10)); // Изход: false
console.log(isPrime(17)); // Изход: true
console.log(isPrime(1)); // Изход: false
console.log(isPrime(0)); // Изход: false

console.log("=======================================================");

function calculateDistance(input) {
  const V1 = input[0] / 3600;
  const V2 = input[1] / 3600;
  const T = input[2];

  const distance1 = V1 * T;
  const distance2 = V2 * T;
  const finalDistance = Math.abs(distance1 - distance2);

  console.log(
    `Разстоянието между двата обекта в края на периода е ${finalDistance} метра.`,
  );
}

calculateDistance([50, 30, 3600]);

console.log("=======================================================");

function createObjectFromArray(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i += 2) {
    const key = arr[i];
    const value = arr[i + 1];
    obj[key] = value;
  }

  return obj;
}

const result = createObjectFromArray([
  "name",
  "Pesho",
  "age",
  "23",
  "gender",
  "male",
]);
console.log(result);

console.log("=======================================================");

function findMaxNumber(numbers) {
  let maxNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
}

const numbers = [10, 5, 20];
const maxNumber = findMaxNumber(numbers);
console.log("Най-голямото число е:", maxNumber);

console.log("=======================================================");

function calculate(input) {
  const operand1 = parseFloat(input[0]);
  const operand2 = parseFloat(input[1]);
  const operator = input[2];
  let result;

  switch (operator) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "*":
      result = operand1 * operand2;
      break;
    case "/":
      result = operand1 / operand2;
      break;
    default:
      console.log("Невалиден оператор.");
      return;
  }

  return result;
}

const inputCalc = ["18", "-1", "+"];
const output = calculate(inputCalc);
console.log(output);

console.log("=======================================================");

function capitalizeWords(sentence) {
  const words = sentence.split(/\s+/);
  const capitalizedWords = words.map((word) => word.toUpperCase());
  const result = capitalizedWords.join(", ");
  return result;
}

const inputWords = "Hi, how are you?";
const outputWords = capitalizeWords(inputWords);
console.log(outputWords);

console.log("=======================================================");
