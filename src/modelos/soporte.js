var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
mongoose.connect("mongodb://localhost:27017/SistemaSoporte");

var soporteSchema = new Schema({
    cliente: String,
    equipo: String,
    descripcion: String,    
});

var soporte = mongoose.model("soporte", soporteSchema);
module.exports.soporte = soporte;