const { model, Schema } = require('mongoose')

const projectSchema = new Schema({
    name: String,
    imagen: String,
    descripcion: String
})


module.exports = model('project', projectSchema)