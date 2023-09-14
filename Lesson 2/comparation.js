console.log('17' == 17);
console.log('17' === 17);
console.log(17 === 17);
console.log(17.000000001 === 17);
console.log([] == []);
console.log([] === []);

const object1 = {};
const object2 = object1;
console.log(object1 == object2);
console.log(object1 === object2);

console.log({} == {});
console.log({} === {});

const number = 40;
if (number > 50) {
    console.log('Case 1');
} else {
    console.log('Case 2');
}

const value = 100;
switch (value) {
    case 'name':
        console.log('It is name case');
        break;
    case 100:
        console.log('It is 100 case');
        break;
    case true:
        console.log('It is true case');
        break;
    default:
        console.log('It is default case');
}

console.log(null == undefined);
console.log(null === undefined);

const notSetdValue = undefined
console.log(notSetdValue == null);