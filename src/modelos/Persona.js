var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
mongoose.connect("mongodb://localhost:27017/SistemaSoporte");


var personaSchema = new Schema({
    nombre: String,
    apellido: String,
    cedula: String,    
    fecha_nacimiento: Date,
    direccion: String,
    genero: String,
    correo: String,
    celular: String,
    estado: Number,
});

var persona = mongoose.model("persona", personaSchema);
module.exports.persona = persona;
