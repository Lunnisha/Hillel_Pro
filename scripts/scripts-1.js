for (let i = 10; i < 26; i += 0.5) {

  console.log(i);
}

const number = +prompt("Введіть число"); {

  if (number % 2 !== 0 && number % 3 !== 0) {

    console.log(`${number} просте число`);
  }

  else {
    console.log(`${number} складене число`);
  }
}

localStorage.setItem("number", number);

discount = +prompt("Сума вашої покупки становить:");

if (discount <= 100) {

  alert(`Вітаю, ваша знижка 3%!`);
}

else if (discount <= 200) {

  alert(`Вітаю, ваша знижка 5%!`);
}

else if (discount > 200) {

  alert(`Вітаю, ваша знижка 7%!`);
}

localStorage.setItem("discount", discount);

//таблиця множення

for (i = 1; i <= 10; i++) {

  console.log(`Множимо на "${i}"`);

  for (j = 1; j <= 10; j++) {

    console.log(`${i} * ${j} = ${i * j}`);
  }
}

const oneDollar = 36.76;

for (let i = 10; i <= 100; i += 10) {

  console.log(`${i} USD = ${oneDollar * i} UAH`);

  // console.log(`${i} USD = ${Math.round(oneDollar) * i} UAH`); Тут я округлила до найближчого цілого і вийшли гарні числа:)
}

/* із завданням №7 у мене вийшла серйозна запара, на жаль... Я ніяк не можу додуматись, щоб гарно згребсти усі цифри і розкласти іх у консольці*/


do {
  num = prompt("Введіть число", 0);

  if (num % 2 === 0) {

    console.log(`${num} парне число`);

  } else

    console.log(`${num} нeпарне число `);

  if (num >= 0) {

    console.log(`${num} плюсове число`);

  } else

    console.log(`${num} мінусове число`);

  if (num % 10 === 0) {

    console.log(`${num} число з нулем`);

  } else

    console.log(`${num} число без нулів`);

} while (num != null);