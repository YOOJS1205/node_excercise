// let, const는 재정의가 불가능한 ES6의 새로운 문법이다.
// var와 다르게 block level scope를 가짐

let hello = 'first hello';
// 재선언 불가능
// let hello = 'second hello';
// 재할당 가능
hello = 'second hello';

if (true) {
    // 지역 변수
    let hello = 'third hello';
    console.log(hello);
}

console.log(hello);