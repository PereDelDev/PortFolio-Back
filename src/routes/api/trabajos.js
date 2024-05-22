const router = require('express').Router();

const Trabajo = require('../../models/trabajo.model')

router.get('/', async (req, res) => {
    try {

        const lista = await Trabajo.find()
        console.log(lista)
        res.json(lista)
    } catch (error) {
        res.json({ fatal: 'Algo va mal' })
    }
});


module.exports = router;