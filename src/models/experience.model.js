const { model, Schema } = require('mongoose')

const experienceSchema = new Schema({
    description: String,
})

module.exports = model('experience', experienceSchema)