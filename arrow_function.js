const foo = () => {
    console.log('arrow function');
}

const num = x => {
    return x;
}

const plus = (x, y) => x + y;

foo();
console.log(num('hihi'));

// function foo() {
//     console.log('arrow function');
// }

// 특징 1. 매개변수가 1개이면 소괄호 생략이 가능
// 특징 2. 함수 내부가 1줄이면 중괄호, return 생략 가능
// 특징 3. 2줄 이상이면 중괄호, return 생략이 불가능하다.