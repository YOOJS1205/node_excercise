- ## Node.js란?
  => JavaScript 런타임

1. 런타임 => 프로그래밍 언어가 구동되는 환경
2. 이벤트 기반 => 이벤트가 발생했을 때 미리 지정해둔 작업을 수행하는 방식
3. 논 블로킹 I/O => 이전 작업이 완료될 때 까지 기다리지 않고, 다음 작업들을 수행 (비동기)
4. 싱글 스레드 vs 멀티 스레드 => 스레드는 작업을 실행하는 단위, Node.js는 싱글 스레드

- ## var, let, const

  1. var => 함수 scope를 가짐

- ## 비구조화 할당

  => 객체, 배열안의 값을 추출해서 변수, 상수에 바로 선언하는 문법

- ## 비동기 프로그래밍

  => 코드의 흐름을 기다리지 않고 각자 수행 (순차적으로 실행 x)<br>
  => 모든 태스크가 동시에 수행<br>

  - 문제점 : 태스크가 순차적으로 실행되지 않아 순서를 알 수 없다.<br>
    => 해결방법으로 콜백이 존재한다.

  ```javascript
  // 콜백 함수 예시
  $("#button").click(() => {
    alert("button clicked!");
  });
  // 버튼이 클릭 후 실행되도록 콜백함수 사용
  ```

  => 콜백 함수를 남발하면 callback hell에 빠질 수 있다.

  - promise (콜백 헬의 해결책)

- ## 서버란?

  => 네트워크를 통해 클라이언트에 정보나 서비스를 제공하는 컴퓨터, 프로그램<br>
  => 클라이언트가 요청, 서버가 응답

- ## localhost

  => 현재 컴퓨터의 내부 주소, 서버 개발할 때 테스트용으로 많이 사용<br>
  => localhost = 127.0.0.1 (Internet Protocal)<br>
  => 포트 : 서버 내의 프로세스를 구분하는 번호

- ## API 서버

  => 요청(클라이언트)을 받고 응답을 하는 서버

- ## npm (node package manager)

  => 다른 개발자가 만들어 놓은 패키지를 모아놓은 것

  - package.json<br>
    => 패키지들간의 의존성과 버전 관리<br>
    => scripts 안의 test에 npm에 대한 명령어 입력 가능 (터미널에 npm run test)
  - 패키지 설치하기<br>
    `npm install 패키지명`
  - package-lock.json<br>
    우리가 설치한 패키지의 모든 정보가 들어있음
  - `npm install -D 패키지명`<br>
    개발환경에서만 사용하고 싶을 때
  - `npm install -g 패키지명`<br>
    한 번의 설치만으로 모든 곳에서 사용이 가능하다.

- ## express

  => 빠르고 간편한 웹 프레임워크 (프로그램을 만들기 위한 기본 틀)

  - 패키지 리스트
    1. express
    2. express-generator => express의 틀
    3. nodemon => 변경할때마다 서버를 끄고 켜야하는 번거로움 해결<br>
       `nodemon 경로` 로 실행하면 된다.

- ## 구조 살펴보기

  1. app.js => 라우팅의 시작점
  2. router

  ```javascript
  // router + http 메소드 + url + req, res 객체
  router.get("/", (req, res) => {
    // request 요청: 데이터 보낼 수 있음
    // response 응답
    const data = req.body.data;
    // 응답 객체
    // res.send (문자열), res.json, res.render (뷰파일 렌더링)
    res.send("hi there");
  });
  ```

- ## HTTP method

  => 서버에 요청을 보내는 방법

  1. GET: 요청 받은 정보를 검색하여 응답 (READ)
  2. POST: 요청된 자원을 생성 (CREATE)
  3. PUT: 요청된 자원을 수정 (UPDATE)
  4. DELETE: 요청된 자원을 삭제 (DELETE)

  ```javascript
  let arr = [];

  // GET method
  router.get("/read", (req, res) => {
    // req 객체로 요청받은 데이터 받기 가능
    // res 객체로 서버에서 클라이언트로 응답 가능
    res.status(200).json({
      message: "read success",
    });
  });

  // POST method: DB에 데이터 넣을 때 많이 사용
  router.post("/create", (req, res) => {
    // req.body로 데이터를 받을 수 있음.
    const { data } = req.body;
    arr.push(data);
    res.status(200).json({
      message: "create success",
      result: arr,
    });
  });

  // PUT method: 데이터 수정
  // update/0 => 0번째 데이터
  router.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    arr[id] = data;
    res.status(200).json({
      message: "update success",
      result: arr,
    });
  });
  ```

// DELETE method: 데이터 삭제
router.delete('/delete/:id', (req, res) => {
const { id } = req.params;
arr.splice(id, 1);
res.status(200).json({
message: 'delete success',
result: arr,
})
})

module.exports = router;

- ## middleware
  => req 요청과 res 응답 사이에 존재하여 목적에 맞게 처리하는 함수들
- ## multer

  => 파일을 업로드할 때 유용한 패키지

  ```javascript
  upload.single("image");
  // 업로드 파일
  req.file;
  // 나머지 데이터
  req.body;
  ```

  ```javascript
  // imageUpload.js
  const multer = require("multer");
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // 암호화되어서 들어가는 이미지 파일을 풀어서 publie/images 경로에 넣는다.
      cb(null, "public/images/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage });

  module.exports = upload;
  ```

  ```javascript
  router.post("/upload", upload.single("image"), (req, res) => {
    const file = req.file;
    console.log(file);
    res.status(200).json({
      message: "upload success!!",
    });
  });
  ```

- ## EJS

  => Embedded JavaScript Template, JavaScript 변수를 view 파일 내에서도 사용 가능

  - 문법

  1. js코드 => `<%...%>`
  2. 변수 출력 => `<%= %>`
  3. ejs 분할 (컴포넌트화) `<% include 파일명 %>`

- ## express-session

  - session => 저장이 필요한 정보들을 서버에 저장하여 연결 상태가 계속 유지되도록 하는 것 => 로그인 유지 등..

  1. 로그인 기능 구현

  ```javascript
  router.get("/login/:username/:password", (req, res) => {
    const session = req.session;
    const { username, password } = req.params;
    if (!userInfo[username]) {
      res.status(400).json({
        message: "user not found",
      });
    }

    if (userInfo[username]["password"] === password) {
      session.username = username;
      res.status(200).json({
        message: "user login!!",
      });
    } else {
      res.status(400).json({
        message: "user pw incorrect!!",
      });
    }
  });
  ```

  2. 로그아웃 기능 구현

  ```javascript
  // 로그아웃 기능 구현
  router.get("/logout", (req, res) => {
    const session = req.session;
    if (session.username) {
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect("/users");
        }
      });
    } else {
      // 로그아웃되면 해당 페이지로 이동시킨다.
      res.redirect("/users");
    }
  });
  ```

- ## DataBase

  => 데이터를 구조화하여 저장시켜 놓은 집합체

  - 쿼리 : DB를 관리하기 위한 명령을 하거나 원하는 정보를 요청하는 행위<br>
  - 스키마 : 어떠한 구조로, 어떤 제약조건으로 저장되어야하는지 정의한 것
  - NoSQL : Not Only Structured Query Language, 스키마의 한계 보완
    - 스키마, 관계가 없고, JSON 형태

- ## MongoDB

  - Document Oriented, 스키마 제약x, Node.js와의 호환 good

- ## mongoose

  => MongoDB 안의 데이터를 저장, 생성, 업데이트할 때 쉽게 관리할 수 있게 도와주는 패키지<br>
  => Document를 조회할 때 자바스크립트 Object로 바꿔주는 역할

  - 스키마 만들기 => 데이터에 제약조건 걸어주기

  ```javascript
  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  const postSchema = new Schema({
    title: String,
    content: String,
    create_date: { type: Date, default: new Date() },
  });

  module.exports = mongoose.model("post", postSchema);
  ```
