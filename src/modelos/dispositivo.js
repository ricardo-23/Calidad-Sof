var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
mongoose.connect("mongodb://localhost:27017/SistemaSoporte");
var dispositivoSchema = new Schema({
    idpersona: String,
    modelo: String,
    marca: String,
    color: String,    
    almacenamiento: String,
    ram: String,
    estado: Number,
    observacion: String,
});

var dispositivo = mongoose.model("dispositivo", dispositivoSchema);
module.exports.dispositivo = dispositivo;