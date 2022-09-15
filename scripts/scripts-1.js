const sum = 0.1 + 0.2;

console.log(+sum.toFixed(2));

const login = prompt("Введіть логін користувача");

const password = prompt("Введіть пароль користувача");

localStorage.setItem("login", login);

localStorage.setItem("password", password);

console.log(`логін - ${login}, пароль - ${password}`);

"use strict";

let userAdmin;

let pass;

const admisLogin = "admin";

const admisPass = "12pass33210";

do {
  userAdmin = prompt("Введіть логін для надання доступу Admin");

  if (userAdmin === admisLogin) {

    console.log('успіх');

    break;

  } else if (userAdmin == "" || userAdmin == null) {

    console.log('невірний пароль або логін');

    break;

  } else {

    console.log("користувач немає доступу до admin-панелі");

    break;
  }
} while (userAdmin == "" || 1);

do {

  pass = prompt("Введіть пароль для надання доступу Admin");

  if (pass === admisPass) {

    console.log("успіх");
    
    break;

  } else if (pass == "" || pass == null) {

    console.log('невірний пароль або логін');

    break;
  }
  else {

    console.log('нористувач немає доступу до admin-панелі');

    break;

  }
} while (pass == "" || 1);

const watermelon = "Кавун";

const carrot = "Морква";

const potato = "Картопля";

const strawberries = "Полуниця";

console.log(`${watermelon}: 21 грн, ${carrot}: 8 грн, ${potato}: 12 грн, ${strawberries}: 150 грн`);

const wantToBuy = prompt("Що хочете купити?");

console.log(`Клієнт хоче купити: ${wantToBuy}`)

const priceCarrot = 8;

const pricePotato = 12;

const priceStrawberries = 150;

const priceWatermelon = 21;

const clientsMoney = prompt("Скільки маєте грошей на рахунку?");

localStorage.setItem("clientsMoney", clientsMoney);

console.log(`${clientsMoney} грн - стільки грошей у клієнта`);

const howManyWatermelons = prompt("Скільки хочете придбати кавунів?");

const resultOfShoppin = (clientsMoney - (priceWatermelon * howManyWatermelons));

if (clientsMoney > 50) {

  alert(`За ${clientsMoney} грн. Ви придбали ${howManyWatermelons} шт даного продукту. У Вас залишиться ${resultOfShoppin} грн`);

} else if (clientsMoney < 8) {

  alert(`На жаль, у вас недостатньо коштів для купівлі хоча б 1шт. будь-якого продукту`);

} else if (clientsMoney < 21) {

  alert(`У вас недостатньо коштів для купівлі хоча б 1шт ${watermelon} `);
}

// Трикутник

const side_A = prompt("Укажіть сторону А трикутника");

const side_B = prompt("Укажіть сторону В трикутника")

const side_C = prompt("Укажіть сторону С трикутника")

if (side_A * side_A + side_B * side_B >= side_C * side_C) {

  alert("Трикутник існує");

} else {

  alert("Трикутник не існує");
}

// Приклади

2 && 0 && 3 || true && false // false

false || "" || 3 && true // true

1 && 1000 && '0' || 0 && 'Bob' // '0'

- 1 || 0 || 0 && "" || 1010 // 1010