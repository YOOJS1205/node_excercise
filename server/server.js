// http 패키지를 사용하겠다.
const http = require('http');

// request 요청 / response 응답
http.createServer((req, res) => {
    if(req.url === '/') { // 라우팅
        res.writeHead(200); // 응답 성공 시 200 status 코드
        res.end('main url');
    } else if (req.url === '/upload') {
        res.writeHead(200);
        res.end('upload url');
    } else if (req.url === '/delete') {
        res.writeHead(200);
        res.end('delete url');
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
}).listen(3000, () => {
    console.log('3000번 포트 서버 접속 완료')
})