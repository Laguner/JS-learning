//Дана переменная со значением '5px' и переменная со значением '6px'. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
let num = parseInt("5px");
let num2 = parseInt("6px");
let sum = num + num2;
console.log(sum);

//Дана переменная со значением '5.5px' и переменная со значением '6.25px'. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
let num = parseFloat("5.5px");
let num2 = parseFloat("6.25px");
let sum = num + num2;
console.log(sum);

//Модифицируйте предыдущую задачу так, чтобы к выводящемуся результату добавлялись буквы 'px'. То есть, если наша сумма равна 11.75, то на экран пусть выведется '11.75px'.
let num = parseFloat("5.5px");
let num2 = parseFloat("6.25px");
let sum = num + num2;
console.log(sum + "px");

//Дана переменная с числом. Найдите количество цифр в этом числе.
let num3 = 1234567;
console.log(String(num3).length);

//Даны две переменные с числами. Найдите количество цифр в одном и во втором числе, результаты сложите и выведите на экран.
let num4 = 2391;
let num5 = 302127;
console.log(String(num4).length + String(num5).length);

//Дана строка 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
let str = "abcde";
console.log(str[0], str[2], str[4]);

//Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.
let str2 = "abcde";
let StrResult = str2[4] + str2[3] + str2[2] + str2[1] + str2[0];
console.log(StrResult);

//Дана переменная str3 со строкой 'abcde' и переменная num6 с номером символа. Выведите на экран символ, номер которого хранится в переменной num.
let str3 = "abcde";
let num6 = 4;
console.log(str3[num6]);

//Дана строка. Выведите на экран ее последний символ.
let str4 = "qwerty";
console.log(str4[str4.length - 1]);

//Дана строка. Выведите на экран ее предпоследний символ.
let str5 = "qwerty";
console.log(str5[str5.length - 2]);

//Дана строка '12345'. Найдите сумму цифр этой строки.
let str6 = "12345";
console.log(
  Number(str6[0]) + Number(str6[1]) + Number(str6[2]) + Number(str6[3]) + Number(str6[4])
);

//Дано число 12345. Найдите сумму цифр этого числа.
let num7 = String(12345);
console.log(
  Number(num7[0]) + Number(num7[1]) + Number(num7[2]) + Number(num7[3]) + Number(num7[4])
);

//Дано число 12345. Переставьте цифры этого числа в обратном порядке.
let num8 = String(12345);
console.log(num8[4] + num8[3] + num8[2] + num8[1] + num8[0]);

//Переделайте этот код так, чтобы в нем использовались описанные сокращенные операции:
/*
let num = 47;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
alert(num);
*/
let num9 = 47;
num9 += 7;
num9 -= 18;
num9 *= 10;
num9 /= 15;
console.log(num9);
