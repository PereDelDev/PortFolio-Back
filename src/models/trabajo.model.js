const { model, Schema } = require('mongoose')

const trabajoSchema = new Schema({
    description: String
})

module.exports = model('trabajo', trabajoSchema)