var express = require('express');
var router = express.Router();
var obra =require('../mongoose_models/obras');

/* GET users listing. */
router.get('/', function(req, res, next) {
	obra.find().exec(function (err, data){
		res.json(data);
	});
})
// Prueba para registrar una nueva obra
router.post('/nuevaObra', function(req, res, next) {
	var contenido = new obra({
        categoria: "Hola",
        tipo_vialidad: "Primaria" ,
        longitud:"10293" ,
        superficie: "3829" ,
        status: "Done",
        delegacion: "Coyoacan",
        colonia: "Palmas",
        calle: "Orquidea" ,
        fecha_inicio: "12-07-2014",
        fecha_termino: "12-012-2014" ,
        area_responsable: "X" ,
        afectaciones: "ijdwi",
        descripcion: "Blah Blah",
        ente_responsable:"Blah Blah" ,
        rubro: "Blah Blah",
        entre_calle1:"Blah Blah" ,
        entre_calle2:"Blah Blah" ,
        latitud: "29787" ,
        longitud:"12738"
	});
		contenido.save(function(err) {
	  	if (err)
	  		console.log('No se pudo guardar el descuento \n Error: ' + err);
	  	else
	 		console.log('Descuento guardado \n');
	 		//console.log(contenido);
	 		res.json(contenido);
	});

});

module.exports = router;


