// 1. pending => 대기 상태
// 2. pulfilled => 실행 상태
// 3. rejected => 실패 상태

function sayHello() {
    // sayHello 함수가 실행되면 return의 promise가 실행
    // 1. reslove => 성공했을 때 호출
    // 2. reject => 실패했을 때 호출
    return new Promise((resolve, reject) => {
        resolve('hello');
    })
}

// sayHello()
// .then(resolvedData => {
//     console.log(resolvedData);
//     // 첫번째 then 수행 후 return
//     // 두번째 then의 매개변수로 넘어간다.
//     return resolvedData;
// })
// .then(resolvedData => {
//     console.log(resolvedData);
//     return resolvedData;
// })
// .then(resolvedData => {
//     console.log(resolvedData);
// })
// .catch(error => {
//     console.log(error);
// });

// 여러 then을 사용하면서 많은 태스크를 순차적으로 관리할 수 있다.
// 문법이 복잡한 문제가 있다.
// 해결책 => async, await

// await을 쓰겠다고 함수 앞에 명시
async function test() {
    // 해당 함수가 실행된 이후에 밑의 코드를 실행시키겠다.
    const hello1 = await sayHello();
    console.log(hello1);
}

test();