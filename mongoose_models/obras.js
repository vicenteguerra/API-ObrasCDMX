var mongoose  = require ('mongoose'),
    Schema    = mongoose.Schema;

var obrasSchema = new Schema({
    categoria: {type: String},
    tipo_vialidad: {type: String},
    superficie: {type: String},
    status: {type: String},
    delegacion: {type: String},
    colonia: {type: String},
    calle: {type: String},
    fecha_inicio: {type: String},
    fecha_termino: {type: String},
    area_responsable : {type: String},
    afectaciones: {type: String},
    descripcion: {type: String},
    ente_responsable: {type: String},
    rubro: {type: String},
    entre_calle1: {type: String},
    entre_calle2: {type: String},
    latitud: {type: String},
    longitud: {type: String},
    direccion: {type: String}
});

module.exports = mongoose.model( 'codigo', obrasSchema );