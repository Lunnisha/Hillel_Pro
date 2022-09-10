const userName = prompt("Яке Ваше імʼя?");

const userSurname = prompt("Яке Ваше прізвище?");

const userFavoriteNumber = +prompt("Яке Ваше улюблене число?");

alert(`Вітаю, ${userName} ${userSurname}! Ваше улюблене число - ${userFavoriteNumber}`);

console.log(`Вітаю, ${userName} ${userSurname}! Ваше улюблене число - ${userFavoriteNumber}`);

const firstClientNumber = +prompt("Введіть перше число");

const secondClientNumber = +prompt("Введіть друге число");

const addition = (firstClientNumber + secondClientNumber);

const subtraction = (firstClientNumber - secondClientNumber);

const multiplication = (firstClientNumber * secondClientNumber);

const division = (firstClientNumber / secondClientNumber);

alert(`Сума - ${addition}, різниця - ${subtraction}, добуток - ${multiplication}, ділення - ${division}`);

console.log(`Сума - ${addition}, різниця - ${subtraction}, добуток - ${multiplication}, ділення - ${division}`);

const userAgeQuestion = +prompt("В якому році Ви народились");

let howOldIsTheUser;

const dataNow = 2022;

const userAgeResult = (2022 - userAgeQuestion);

if (userAgeResult >= 18) howOldIsTheUser = "Вітаю, Ви - дорослий/а, можете пити пиво :)";

else if (userAgeResult >= 16) howOldIsTheUser = "Вітаю, Ви - підліток, можете пити лимонад :)";

else if (userAgeResult <= 15) howOldIsTheUser = "Вітаю, Ви - дитина, можете пити те, що дозволять батьки :)";

alert(`Ваш вік - ${userAgeResult} років. ${howOldIsTheUser}`);

console.log(`Ваш вік - ${userAgeResult} років. ${howOldIsTheUser}`);

// Остача від ділення

const firstNumberOfDivisions = 20;

const secondNumberOfDivisions = 3;

const resultOfDivisions = (firstNumberOfDivisions % secondNumberOfDivisions);

alert(`Остача від ділення числа ${firstNumberOfDivisions} на число ${secondNumberOfDivisions} рівна ${resultOfDivisions}`);

console.log(`Остача від ділення числа ${firstNumberOfDivisions} на число ${secondNumberOfDivisions} рівна ${resultOfDivisions}.`);

// Парне чи непарне число

const anyNumber = prompt("Введіть будь-яке число для визначення парності");

let evenOrOddNumber;

if (anyNumber % 2 === 0) evenOrOddNumbers = "число парне";

else if (anyNumber % 2 > 0) evenOrOddNumbers = "число непарне";

alert(`${anyNumber} ${evenOrOddNumbers}`);

console.log(`${anyNumber} ${evenOrOddNumbers}`);