const object = {a: 1, b: 2};

const a = object.a;
const b = object.b
console.log(a, b); //  1 2

// 객체의 비구조화 할당에서는 순서가 중요하지 않다.
// 객체의 키 값과 같아야 가능함.
const obj = {aa: 1, bb: 2};
const {aa, bb} = obj;
console.log(aa, bb); //  1 2

// 배열 비구조화 할당
const arr = [1, 2];
const [one, two] = arr;
console.log(one, two);