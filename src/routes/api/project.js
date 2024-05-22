const router = require('express').Router();

const Porject = require('../../models/project.model')

router.get('/', async (req, res) => {
    try {
        const lista = await Porject.find()
        res.json(lista)
    } catch (error) {
        res.json({ fatal: 'No funciona' })
    }
});


module.exports = router;