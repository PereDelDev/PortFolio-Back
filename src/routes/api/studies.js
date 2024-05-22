const router = require('express').Router();

const Studies = require('../../models/studies.model')

router.get('/', async (req, res) => {
    try {
        const lista = await Studies.find()
        res.json(lista)
    } catch (error) {
        res.json(error)
    }
});


module.exports = router;