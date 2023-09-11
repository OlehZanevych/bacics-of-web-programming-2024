const objectKey = 'gender';
const gender = 'MALE';

const companyMailProperty = 'mail';

const secretKey = Symbol();

const person = {
    firstName: 'Ihor',
    lastName: 'Vasylishin',
    job: {
        type: 'Programmer',
        details: {
            jobName: 'Software engineer',
            company: {
                ['name']: 'N-IX',
                details: {
                    phone: '+3806712345678',
                    [companyMailProperty]: 'n-ix@gmail.com'
                }
            }
        }
    },
    [secretKey]: 'Person key'
}
person.age = 20;
person[objectKey] = gender;
person['job']['salary'] = '4000$';
person.job.salary = '5000$';

console.log(typeof person);
console.log(person);
console.log(JSON.stringify(person));
console.dir(person, {depth: null});

const numbers = [10, 20, 30];

let sum = 0
for (let i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
}
console.log(`Sum: ${sum}`);

let sum2 = 0
for (const value of numbers) {
    sum2 += value;
}
console.log(`Sum2: ${sum2}`);

let sum3;
for (const value in numbers) {
    if (sum3 === undefined) {
        sum3 = value;
    } else {
        sum3 += value;
    }
}
console.log(`Sum3: ${sum3}`);

console.log(typeof numbers);

const values = [1, 'Work', true, 1000n, 34];
console.log(values);

values[0] = 2;
values['1'] = 'Cool work!';
console.log(values);
console.log(values['3']);

console.log('Person keys:')
console.log(Object.keys(person));

console.log('values keys:')
console.log(Object.keys(values));

console.log('Person values:')
console.log(Object.values(person));

console.log('Person entries:')
console.log(Object.entries(person));

const processObjectProperties = (obj, printPref) => {
    Object.entries(obj).forEach(([propertyName, propertyValue]) => {
        printPref ||= '';
        console.log(printPref + propertyName);
        if (typeof propertyValue === 'object' && propertyValue !== null) {
            processObjectProperties(propertyValue, printPref + '-');
        }
    });
}
processObjectProperties(person);