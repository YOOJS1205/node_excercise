var express = require('express');
var router = express.Router();

const postModel = require('../model/post');

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const post = new postModel({
    title: title,
    content: content,
  });
  try {
    // 실행
    const result = await post.save();
    res.status(200).json({
      message: 'upload success!!',
      data: result,
    })
  } catch (error) {
    // 실행 에러 발생 시 상황 핸들링
    res.status(500).json({
      message: error,
    })
  }
})

module.exports = router;
