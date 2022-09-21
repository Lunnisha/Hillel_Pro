function getMinNumberFromParams(numb_1, numb_2, numb_3, numb_4) {

  const minimalNumber = Math.min(numb_1, numb_2, numb_3, numb_4);

  if (numb_1 === undefined || numb_2 === undefined || numb_3 === undefined || numb_4 === undefined) {

    return 'Undefined value!';

  } else if (numb_1 === '' || numb_2 === '' || numb_3 === '' || numb_4 === '') {

    return 'Your value is empty';

  } else if (isNaN(minimalNumber)) {

    return 'Your value is not a number!';

  }

  else

    return minimalNumber;

};

function greatestСommonDivisor(numb_1, numb_2) {

  const remainder = numb_1 % numb_2;

  if (numb_2 === undefined || numb_1 === undefined) {

    return 'Undefined value!';

  } else if (isNaN(numb_2) || isNaN(numb_1)) {

    return 'Your value is not a number!';

  } else if (numb_2 !== 0) {

    return greatestСommonDivisor(numb_2, remainder);
  }

  return numb_1;
};

function perfectNumber(numb) {

  let sum = 0;

  for (i = 1; i <= numb / 2; i++) {

    if (numb % i === 0) {

      sum += i;

    }

  }

  if (sum === numb && sum !== 0) {

    return 'Your number is perfect';

  } else if (numb == null) {

    return 'Your value is empty';

  } else if (numb === undefined || numb === "") {

    return 'Undefined value!';

  } else if (isNaN(numb)) {

    return 'Your value is not a number!';

  } else if (numb < 0) {

    return 'Wrong! Negative value';

  }

  else {

    return 'Your number is not perfect';

  }

};

function sumFromOneNumberToTwo(numb_1, numb_2) {

  let sum1 = 0;

  let sum2 = 0;

  for (let i = numb_1; i <= numb_2; i++) {

    sum1 += i;

  }

  for (let j = numb_2; j <= numb_1; j++) {

    sum2 += j;
  }

  if (numb_1 == null || numb_2 == null) {

    return 'Your value is empty';

  } else if (numb_1 < numb_2) {

    return sum1;

  } else if (numb_2 < numb_1) {

    return sum2;

  } else if (numb_1 === undefined || numb_2 || undefined) {

    return 'Undefined value!';

  } else if (isNaN(sumFromOneNumberToTwo)) {

    return 'Your value is not a number!';

  }

};

function convertToF(celsius) {

  const fahrenheit = celsius * 9 / 5 + 32;

  if (fahrenheit > celsius && celsius !== '') {

    return `${Math.round(fahrenheit)}\xB0F`;

  } else if (celsius == null) {

    return 'Your value is empty';

  } else if (isNaN(convertToF)) {

    return 'Your value is not a number!';

  }

};

function getRandomNumber(min, max) {

  const randomNumberWithMath = Math.floor(Math.random() * (max - min + 1)) + min;

  if (randomNumberWithMath >= 0 && randomNumberWithMath !== '') {

    return randomNumberWithMath;

  } else if (min == "" || max == "") {

    return 'Your value is undefind!';

  } else if (isNaN(getRandomNumber)) {

    return 'Your value is not a number!';

  }

}

getRandomNumber(0, 40);

