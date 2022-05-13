var express = require('express');
var router = express.Router();

const userInfo = {
  lee: {
    password: '123123'
  },
  kim: {
    password: '456456',
  }
}

router.get('/', (req, res) => {
  const session = req.session;
  res.render('index', {
    username: session.username,
  })
})

// 로그인 기능 구현
router.get('/login/:username/:password', (req, res) => {
  const session = req.session;
  const { username,password } = req.params;
  if (!userInfo[username]) {
    res.status(400).json({
      message: 'user not found',
    })
  }

  if (userInfo[username]['password'] === password) {
    session.username = username;
    res.status(200).json({
      message: 'user login!!',
    })
  } else {
    res.status(400).json({
      message: 'user pw incorrect!!',
    })
  }
})

// 로그아웃 기능 구현
router.get('/logout', (req, res) => {
  const session = req.session;
  if (session.username) {
    req.session.destroy(err => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/users');
      }
    })
  } else {
    res.redirect('/users');
  }
})

module.exports = router;