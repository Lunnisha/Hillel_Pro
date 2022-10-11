// Cтворити функцію, яка створює та реєструє нову команду у автопробізі. Під час виклику функції потрібно передати дані про команду - назва команди, ім'я водія, рік народження водія, марка автомобіля, спонсор команди та чи водій допущений до автопробігу

function registrationNewDriversTeam() {
  const driversTeam = {
    teamName: "Starplatinum",
    driversName: "Jotaro",
    driversBirthday: "11.01.20",
    carBrand: "Koenigsegg One:1",
    teamSponsor: "Speedwagon",
    admission: true,
  };
  return driversTeam;
};

registrationNewDriversTeam();

// Запитати дані (через prompt та циклічно) про нового користувача у системі та зберегти його в об'єкт. Дані про користувача - логін, пароль, місто, країна, стать, вік

const newUser = {
  login: prompt("Your login"),
  pass: prompt("Your password"),
  city: prompt("Your city"),
  country: prompt("Your country"),
  sex: prompt("Your sex"),
  age: prompt("Your age"),
};

console.log(newUser);

// Створити функцію, яка буде міняти дані в конкретного користувача створеного пунктом вище. Наприклад сhangeUserData(user_1, city, 'Kherson). Де user_1 - обʼєкт в якому буде мінятись, city - поле, яке буде мінятися на нове значення - 'Kherson'

const сhangeUserData = Object.assign({}, newUser, {
  city: 'Kherson'
});

console.log(сhangeUserData);

// Створити об'єкт cтудента - name, surname, age, course, city, greeting, addHomework. greeting - метод, котрий виводить повідомлення через console.log('Hi. everyone!'). addHomework - метод, котрий виводить повідомлення через console.log('Sending my howework... Please, wait')

const studentData = {
  name: 'Jotaro',
  surname: 'Kujo',
  age: 22,
  course: 4,
  city: 'Lviv',
  greeting: function () {
    console.log('Hi, everyone! I am' + ' ' + this.name + ' ' + this.surname + '.');
  },
  addHomework: function () {
    console.log('Sending my howework... Please, wait' + '.');
  }
};

studentData.greeting();

studentData.addHomework();

// Cтворити функцію isEmpty, яка повертає true, якщо об’єкт не має властивостей (порожній), інакше false.

function isEmpty(str) {
  if (typeof str === "undefined" || str === null || str === "") {
    return true;
  }
  else
    return false;
};

isEmpty('');

// Створити об’єкт для зберігання виручки команди продавців, наприклад: {Taras: 2000, Marta: 10 Ivan: 1200, Petro: 400, Roma: 366, Alina: 829}

const sellers = {
  Taras: 2000,
  Marta: 10,
  Ivan: 1200,
  Petro: 400,
  Roma: 366,
  Alina: 829,
};

// Створити фукнцію, яка працює з цим обʼєктом та обчислює суму всіх виручок та виводить результат через сonsole.log

function allAlmount() {
  let sum = 0;
  for (const key in sellers) {
    sum += sellers[key];
  };
  return sum
};

console.log('Sum of all proceeds -' + ' ' + ' ' + allAlmount() + ' ' + 'grn' + '.');

// Створити фукнцію, яка працює з цим обʼєктом та яка знаходить продавця з найменшою виручкою та виводить результат через сonsole.log у зрозумілому форматі

function minProfit(sellers) {
  let smallest;
  for (const key in sellers) {
    if (!smallest || sellers[key] < sellers[smallest]) {
      smallest = key;
    };
  };
  return smallest;
};

console.log(minProfit(sellers) + ' ' + 'has the smallest sales profit!');

// Створити фукнцію, яка знаходить продавця з найбільшою виручкою та виводить результат через сonsole.log у зрозумілому форматі

function maxProfit(sellers) {
  let largest;
  for (const key in sellers) {
    if (!largest || sellers[key] > sellers[largest]) {
      largest = key;
    };
  };
  return largest;
};

console.log(maxProfit(sellers) + ' ' + 'has the biggest sales profit!');

// Створити фукнцію, яка випадковим чином вибирає продавця місяця та виводить привітання цьому працівнику через сonsole.log у зрозумілому форматі

function randSellers(sellers) {
  let result;
  let count = 0;
  for (const key in sellers) {
    if (Math.random() < 1/++count)
      result = key;
  }
  return result;
};

console.log('Hi,' + ' ' + randSellers(sellers) + ',' + ' ' + 'we are glad to see you!');