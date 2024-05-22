const { model, Schema } = require('mongoose')

const studiesSchema = new Schema({
    title: String,
    school: String,
    type: String,
    period: String,
    descrption: String
})

module.exports = model('studies', studiesSchema)