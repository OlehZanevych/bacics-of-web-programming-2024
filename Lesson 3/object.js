const person = {
    firstName: 'Mykola',
    lastName: 'Trydub'
}

const employee1 = Object.create(person);
employee1.speacialty = 'Teacher';

const employee2 = Object.create(person);
employee2.speacialty = 'Doctor';

console.log(`${employee1.firstName} ${employee1.lastName} ${employee1.speacialty}`);
console.log(`${employee2.firstName} ${employee2.lastName} ${employee2.speacialty}`);

person.firstName = 'Ivan';

console.log(`${employee1.firstName} ${employee1.lastName} ${employee1.speacialty}`);
console.log(`${employee2.firstName} ${employee2.lastName} ${employee2.speacialty}`);

console.log('employee1 own properties:');
for (const [key, value] of Object.entries(employee1)) {
    console.log(`${key}: ${value}`);
}

console.log(employee1.__proto__);
console.log(employee1.__proto__.__proto__);
console.log(employee1.__proto__.__proto__.__proto__);

console.log('employee2 own properties:');
employee2.firstName = 'Taras';
for (const [key, value] of Object.entries(employee2)) {
    console.log(`${key}: ${value}`);
}
console.log(`${employee2.firstName} ${employee2.lastName} ${employee2.speacialty}`);
console.log(employee2.__proto__.firstName);

console.log('employee2 keys:')
for (const key in employee2) {
    if (Object.hasOwn(employee2, key)) {
        console.log(`Own property: ${key}`);
    } else {
        console.log(`Not own property: ${key}`);
    }
}

const arr = [1, 2, 3];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

const employee3 = {age: 20};
// Object.setPrototypeOf(employee3, person);
employee3.__proto__ = person;
console.log(`${employee3.firstName} ${employee3.lastName} ${employee3.age}`);
console.log('employee3 keys:')
for (const key in employee3) {
    if (Object.hasOwn(employee3, key)) {
        console.log(`Own property: ${key}`);
    } else {
        console.log(`Not own property: ${key}`);
    }
}

const employee4 = {};
const employee5 = Object.assign(employee4, person);
person.firstName = 'Ihor';
console.log(`${employee4.firstName} ${employee4.lastName} ${employee4.age}`);
console.log(`${employee5.firstName} ${employee5.lastName} ${employee5.age}`);
console.log(employee5 === employee4);

const employee6 = Object.assign({}, person, employee3);
console.log(`${employee6.firstName} ${employee6.lastName} ${employee6.age}`);

const employee7 = {...person, ...employee3};
console.log(`${employee7.firstName} ${employee7.lastName} ${employee7.age}`);