const router = require('express').Router();

const experience = require('../../models/experience.model')

router.get('/', async (req, res) => {
    try {
        const lista = await experience.find()
        res.json(lista)
    } catch (error) {
        res.json({ fatal: 'Algo va mal' })
    }
});


module.exports = router;