const number = 47;
const numberWrapper = new Number(50);

console.log(typeof number);
console.log(typeof numberWrapper);

const sum = number + numberWrapper;
console.log(sum);
console.log(typeof sum);

number.value = 'Custom value';
console.log(`Custom value in number: ${number.value}`);

numberWrapper.value = 'Custom value 100';
console.log(`Custom value in numberWrapper: ${numberWrapper.value}`);

const numberValue = Number(10);
const numberValue2 = Number('-12');
const numberWrapper2 = new Number('-12');

console.log(typeof numberValue);
console.log(typeof numberValue2);
console.log(typeof numberWrapper2);
console.log(numberValue);
console.log(numberValue2);
console.log(numberWrapper2);