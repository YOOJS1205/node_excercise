var hello = 'hello';
// var는 재선언이 가능하다. => 여러가지 문제점이 발생
var hello = 'hello hello';

// var는 function scope: 함수 이외의 블록에서는 전역 취급
function sayHello() {
    var hello = 'hello hello';
    console.log(hello);
}

// if (true) {
//     var hello = 'hello hello';
// }
// => 전역에서 콘솔에 hello 입력하면 hello hello 출력

sayHello();
console.log(hello);