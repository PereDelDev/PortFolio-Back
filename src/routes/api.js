const router = require('express').Router();

router.use('/projects', require('./api/project'))
router.use('/experience', require('./api/experience'))
router.use('/studies', require('./api/studies'))
module.exports = router;