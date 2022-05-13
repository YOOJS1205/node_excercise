// const는 재선언 재할당이 모두 불가능하다.

const hello = 'first hello';
hello = 'second hello'; // 에러 발생

if (true) {
    // 블록 레벨 안의 hello는 전역 hello와는 다른 변수
    const hello = 'second hello';
    console.log(hello); // second hello
}

console.log(hello);