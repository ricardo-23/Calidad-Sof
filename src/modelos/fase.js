var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
mongoose.connect("mongodb://localhost:27017/SistemaSoporte");

var faseSchema = new Schema({
    id_dispositivo: String,
    nombre: String,
    descripcion: String,
    fecha_inicio: Date,
    fecha_final: Date,  
});

var fase = mongoose.model("fase", faseSchema);
module.exports.fase = fase;