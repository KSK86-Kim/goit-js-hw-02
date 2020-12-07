let input;
const numbers = [];

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
    break;
  }

  numbers.push(Number(input));
}

console.log(`Общая сумма чисел равна ${summ(numbers)}`);
