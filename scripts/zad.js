/*var string = "print()";

document.writeln("Дана строка, содержащая латинские буквы и скобки трех видов: «()», «[]», «{}». Если скобки расставлены правильно (то есть каждой открывающей соответствует закрывающая скобка того же вида), то вывести число 0. В противном случае вывести или номер позиции, в которой расположена первая ошибочная скобка, или, если закрывающих скобок не хватает, число −1.\r\n");
document.writeln("Входная строка: " + string);

var open = 0;
var close = 0;

for (var i = 0; i < string.length; i++){
    switch (string[i]){
        case "(":
            open++;
            break;
        case ")":
            close++;
            break;
        case "{":
            
            break;
        case "}":
            
            break;
        case "[":
            
            break;
        case "]":
            
            break;
    }
}

if (!open - close)
    document.writeln("OK");
else
    document.writeln("ERROR");*/


/*var num = 54321;
var outNum = 0;
console.log(num);

//for (; num > 0; num = parseInt(num / 10)){    num / 10 >> 0   num / 10 | 0
for (; num > 0; num = ~~(num / 10)){
    outNum = outNum
}
console.log(outNum);*/


var num = 54321;
var outNum = 0;

for (; num > 0; num = parseInt(num / 10)){
    console.log("num = " + num);
    console.log("num % 10 = " + (num % 10));
    outNum *= 10;
    outNum += num % 10 * (num % 10 % 2);
    console.log("outNum = " + outNum);
}



