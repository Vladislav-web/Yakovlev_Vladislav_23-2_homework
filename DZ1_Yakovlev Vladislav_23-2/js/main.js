/* 1) написать программу: нужно запрашивать у пользователя
 его имя и фамилию (отдельным prompt) и выводит приветствие 
 в виде: Здравствуйте, Имя Фамилия! (задание на конкатенацию) */

var name = prompt("Ваше имя?");
var sirName = prompt("Ваше фамилия?");
var userName = alert("Здравствуйте!" + " " + name + " " + sirName);


/* 2) написать программу "светофор": программа запрашивает у пользователя 
цвет в текстовом виде, и печатает в консоль действие согласно ПДД. 
Например: красный : стой! желтый : жди и т.д. (задание на switch..case) */

var currentClient = prompt("Какого цвета сигналы светофора? (Ответы в консоле)");

switch (currentClient) {
  case "Зеленый":
    console.log("Можно перейти дорогу");
    break;
  case "Красный":
    console.log("Стой!");
    break;
  case "Желтый":
    console.log("Внимание");
    break
  default:
    console.log("Вы ответили неправильно");
    break;
}

/* 3) написать программу "конвертер чисел". Пользователь вводит число от 1 до 9, 
программа должна сконвертировать это число в римское. Например: 2 -> II, 5 -> V и т.д. 
(задание на switch..case) */

function convert() {
  var romNum = document.querySelector('.num').value;
  var frontResult = document.querySelector('.frontResult');

    switch (+romNum) {
      case 1:
        romNum = 'I';
        break;
      case 2:
        romNum = 'II';
        break;
      case 3:
        romNum = 'III';
        break;
      case 4:
        romNum = 'IV';
        break;
      case 5:
        romNum = 'V';
        break;
      case 6:
        romNum = 'VI';
        break;
      case 7:
        romNum = 'VII';
        break;
      case 8:
        romNum = 'VIII';
        break;
      case 9:
        romNum = 'IX';
        break;
  }
  frontResult.textContent = romNum
}



