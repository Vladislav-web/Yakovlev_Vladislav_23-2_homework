// 1) Написать функцию которая маскирует номер банковской карты.Например: maskCard("4815154823541789") - > "481515XXXXXX1789".Должны быть видны первые 6 и последние 4 символа, остальные скрыть символом(по умолчанию Х).Причем сделать так чтобы скрывающий символ можно было передавать как параметр.Например: maskCard("4815154823541789", "*") - > "4815154823541789"".

let cardNumber = '4815154823541789';

let maskCard = (num, symb) => cardNumber.slice(0, 6) + symb.repeat(6) + cardNumber.slice(-4);
console.log(maskCard('4815154823541789', 'X'));

// 2) Написать функцию капитализации строк.Например: capitalizeString("ЕВГЕНИЙ") - > "Евгений";
// capitalizeString("иВАНОВ") - > "Иванов";
// Капитализация - это процесс преобразования строки, когда первая буква становится заглавной, а остальные строчными.

let capitalizeString = (name) => name.toUpperCase().slice(0, 1) + name.toLowerCase().slice(1);
console.log(capitalizeString('ЯКОВЛЕВ'));

//  3) *Написать функцию по обезличиванию ФИО.Функция должна заменить все символы кроме первого и последнего на знак
//  _.Например: depersonalize(“Киселев Евгений Дмитриевич”) - > “К_____в Е_____й Д________ч”, depersonalize(“Сидоров Вова”) - > “С_____в В__а”.

let masKard = (sirName, name, patronymic, symb) => {
 return sirName.slice(0, 1) + symb.repeat(6) + sirName.slice(-1) +' '+ name.slice(0, 1) + symb.repeat(6) + name.slice(-1) +' '+ patronymic.slice(0, 1) + symb.repeat(6) + patronymic.slice(-1)
}
console.log(masKard('Yakovlev', 'Vladislav', 'Vasilevich', '_'));


