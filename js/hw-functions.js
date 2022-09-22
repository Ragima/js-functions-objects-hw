//1. Написать функцию сложения двух чисел

function sum(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    return 'Please enter only numbers!';
}

//console.log(sum(10,30));  //40



//2. Написать функцию, которая выводит в консоль четные числа от a до b (a, b – параметры функции)

function printOddNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        for (let i = a; i <= b; i++) {
            if (i % 2 === 0) console.log('Odd number:', i);
        }
        return;
    }
    console.log('Please enter only numbers!');
}

// printOddNumbers(10,20)




//3. Написать функцию, которая сравнивает 3 числа и выводит в консоль самое большое из них

function printMaxNumber(num1, num2, num3) {
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
        if (num1 > num2 && num1 > num3) {
            return num1;
        } else if (num2 > num1 && num2 > num3) {
            return num2;
        } else if (num3 > num1 && num3 > num2) {
            return num3
        } else return 'Numbers are equals!!!'
    }

    return 'Please enter only numbers!';
}

console.log(printMaxNumber(10, 10, 10))