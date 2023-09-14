console.log(functionDeclaration(1, 3));
function functionDeclaration(a, b) {
    return a + b;
}

const functionExpression = function (a, b) {
    return a + b;
}
console.log(functionExpression(1, 3));

const arrowFunction = (a, b) => a + b;
console.log(arrowFunction(1, 3));

function functionDeclarationFunc() {
    return this;
}

const functionExpressionFunc = function() {
    return this;
}

const arrowFunc = () => this;

const obj1 = {functionDeclarationFunc, functionExpressionFunc, arrowFunc};
const obj2 = {functionDeclarationFunc, functionExpressionFunc, arrowFunc};

console.log(obj1.functionDeclarationFunc === obj2.functionDeclarationFunc);
console.log(obj1.functionExpressionFunc === obj2.functionExpressionFunc);
console.log(obj1.arrowFunc === obj2.arrowFunc);
console.log('------------------------');

console.log(obj1.functionDeclarationFunc() === obj2.functionDeclarationFunc());
console.log(obj1.functionExpressionFunc() === obj2.functionExpressionFunc());
console.log(obj1.arrowFunc() === obj2.arrowFunc());
console.log('------------------------');

console.log(obj1.functionDeclarationFunc() === obj1);
console.log(obj1.functionExpressionFunc() === obj1);
console.log(obj1.arrowFunc() === obj1);
console.log(obj1.arrowFunc() === this);

