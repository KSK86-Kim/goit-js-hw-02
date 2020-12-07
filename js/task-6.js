let input;
const numbers = [];
let total = 0;
let message;

const summ = function (numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
};

while (true) {
  input = prompt("Введите число!");

  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  if (input === null) {
    if (numbers.length === 0) {
      break;
    }

    summ(numbers);
    message = `Общая сумма чисел равна ${sum}`;
    break;
  }

  numbers.push(Number(input));
}

console.log(message);
