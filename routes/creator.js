const express = require('express');
const router = express.Router();

router.get('/creator', (req, res, next) => {
    res.render('../views/creator.ejs');
});

module.exports = router;