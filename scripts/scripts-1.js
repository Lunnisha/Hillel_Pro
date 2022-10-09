// Створити функцію-конструктор Людини. Властивості, які будуть описувати екземпляр Людини - ім'я, вік, стать, національність, країна, список країн для подорожей. Створити універсальні функції - знайомство, прокидатися, засинати й список країн, які Людина хоче відвідати. Роботу цих функцій можна виводити через console.log. Але в кожній з функцій повинно використовуватись якомога більше характеристик конкретної Людини на якій ця функція викликається (підказка: тут треба використати call/apply)

//Шаблон

function Human(name, age, sex, nationality, country, countryWishList) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.nationality = nationality;
  this.country = country;
  this.countryWishList = countryWishList;
}

//Приклади

const Kris = new Human ('Kris', 22, 'female', 'american', 'USA', 'Ukraine, Japan, Peru, Kenya, Island, Spain',)
console.log(Kris);

const Alberto = new Human ('Alberto', 15, 'male', 'italian', 'Italy', 'Prague, Mexico, Poland, Australia',)
console.log(Alberto);

greeting = function () {
  console.log(`Hello! My name is ${this.name}, i'm ${this.age} and I from ${this.country}. Nice to meet you!`)
};

wakeUp = function () {
  console.log(`Hi, beautiful world, how cool to wake up so early!`)
};

sleep = function () {
  console.log(`I'm so sleepy... Good night everyone!`)
};

countryWishList = function () {
  console.log(`I really want to visit such countries us: ${this.countryWishList}!`)
};

greeting.call(Kris);

wakeUp.call(Alberto);

sleep.call(Kris);

countryWishList.call(Kris);

countryWishList.call(Alberto);

// Створити власну реалізацію методу .bind (підказка: в кінці треба помістити цю власну функцію у прототип - Function.prototype.myOwnBind = function () { [тут_код_кастомного_bind] }

Function.prototype.myOwnBind = function (obj, args) {
  const fn = this;
  return function () {
    fn.call(obj, args);
  }
};
  
const newClientToTheCamp = {
  name: 'Tom', 
  surname: 'Tompson',
  age: 15,
};

const aboutClient = function (city, like,) {
  console.log(`I'm ${this.name} ${this.surname}, my age ${this.age}. I'm from a big city - ${city}. I like: ${like}.`);
};

const addInfo = aboutClient.bind(newClientToTheCamp, 'New York');
addInfo ('animals, computer games, drawing');

// Cтворити функцію, котра приймає 2 параметри - об'єкти. Функція повинна перевіряти чи ці 2 обʼєкти абсолютно ідентичні та повертає результат у зрозумілому форматі

const obj_1 = {
  name: 'Milka',
  surname: 'Boo',
  age: 2,
};

const obj_2 = {
  surname: 'Boo',
  age: 2,
  name: 'Milka',
};

function isEqual(obj_1, obj_2) {
  const props1 = Object.getOwnPropertyNames(obj_1);
  const props2 = Object.getOwnPropertyNames(obj_2);

  if (props1.length !== props2.length) {
    return false;
  };

  for (let i = 0; i < props1.length; i += 1) {
    const prop = props1[i];

    if (obj_1[prop] !== obj_2[prop]) {
      return false;
    };
  };

  return true;
};

console.log(isEqual(obj_1, obj_2));

// Створіть функцію-конструктор Calculator, який створює об’єкти з чотирма (або трьома) методами:

function Calculator() {
  
  this.addiction = function(num1, num2) {
    return num1+num2;
  };
  
  this.multiplication = function(num1, num2) {
    return num1*num2;
  };
  
  this.division = function(num1, num2) {
    return num1/num2;
  };
  
  this.subtraction = function(num1, num2) {
    return num1-num2;
  };
};

const resalt = new Calculator();

resalt.addiction(16, 4); 
resalt.multiplication(9, 9);
resalt.division(63, 7); 
resalt.subtraction(100, 40); 

// enterData - запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// calculateSum() повертає суму цих властивостей.
// calculateNSD() повертає результат пошуку НСД
// calculateNSK() повертає результат пошуку НСК

function Calculator2() {

  this.enterData = function() {
    this.numb_1 = +prompt('Enter number 1');
    this.numb_2 = +prompt('Enter number 2');
  };

  this.Sum = function() {
    return this.numb_1 + this.numb_2;
  };

  // this.multy = function() {
  //   return this.numb_1 * this.numb_2;
  // };

  this.NSD = function() {
    while(this.numb_2) {
      const resalt = this.numb_2;
      this.numb_2 = this.numb_1 % this.numb_2;
      this.numb_1 = resalt;
    }
    return this.numb_1;
  };

  /*this.NSK = function() {
    Свідомо видалила частину коду, бо зовсім не розумію чого не виходило написати саме цю частину коду :(
 }*/
 
}

let calculator2 = new Calculator2();
calculator2.enterData();

alert( "Sum=" + calculator2.Sum());
// alert( "Multy=" + calculator2.multy());
alert( "НСД=" + calculator2.NSD());
// alert( "НСК=" + calculator2.NSK() );
