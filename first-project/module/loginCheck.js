const loginCheck = (req, res, next) => {
    const userLogin = false;
    if (userLogin) {
      next(); // 다음 라우터로 이동
    } else {
        res.status(400).json({
        message: 'login fail!!',
    })
    }
}

module.exports = loginCheck;