const router = require('express').Router();

router.use('/projects', require('./api/project'))
router.use('/trabajo', require('./api/trabajos'))
router.use('/studies', require('./api/studies'))
module.exports = router;