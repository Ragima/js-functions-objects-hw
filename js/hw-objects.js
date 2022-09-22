//1. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
  return Object.keys(obj).length ? false : true;
}

// console.log(isEmpty({name: 122}));

//2. Создать объект, у которого есть firstName и lastName, а также метод, который выводит в консоль firstName + lastName

let user = {
    firstname: 'Ragima',
    lastname: 'Bagirova',
    printFullname() {
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

// user.printFullname();


// 3. Realize pipe pattern
// const res = pipe(
//   multiplyTwo,
//   minusFour
// )(10);

// console.log(res); // 16

const multiplyTwo = (n) => n * 2;
const minusFour = (n) => n - 4;

const pipe = (func1, func2) => (num) => {
  return  func2( func1(num));
}

let res = pipe(multiplyTwo,minusFour)(20);
console.log('Result:', res)


// 4. Realize memo pattern
// const sum = (a,b) => a + b;
// const memedSum = memo(sum);

// console.log(memedSum(1,2));
//console.log(memedSum(1,2)); // second time there is no calculation, we get answer from cache

const sum = (num1, num2) => num1 + num2;

function memo(func) {
    let cache = new Map();
    if(typeof func === 'function') {
        return function memo() {
            let key = `${arguments[0]}, ${arguments[1]}`;

            if(cache.has(key)) {
                console.log('Repeat', cache.get(key));                
                return cache.get(key);
            } else {
                let result =  func.apply(null, arguments);

                cache.set(key, result);
                return result;     
            }
        } 
    }
   console.log('The argument must be a function!')
}



const memoSum = memo(1212152);
console.log(memoSum(10,204))
console.log(memoSum(10,4))







