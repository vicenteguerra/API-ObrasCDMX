var obra =require('../mongoose_models/obras');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(theUrl)
{
   var xmlHttp = null;

   xmlHttp = new XMLHttpRequest();
   xmlHttp.open( "GET", theUrl, false );
   xmlHttp.send( null );
   return xmlHttp.responseText;
}

    
   var yeison = httpGet("http://datos.labcd.mx/api/action/datastore_search_sql?sql=SELECT%20COUNT%20(*)%20from%20%224fe5be8e-389d-4170-a21b-197617a7f064%22");
   obj = JSON.parse(yeison);
   
   var numeroObras = (obj.result.records[0].count);
   for ( i = 1 ; i < 5 ; i++)
   {
       // Consulta por id de toda la base de datos
       var yeison1 = httpGet("http://datos.labcd.mx/api/action/datastore_search_sql?sql=SELECT%20*%20from%20%224fe5be8e-389d-4170-a21b-197617a7f064%22%20WHERE%20_id="+i);
       obj1 = JSON.parse(yeison1);
       var direcciones = obj1.result.records[0].calle + " " +obj1.result.records[0].colonia + " DF"
       //alert(JSON.stringify(direcciones));
       //API Google para obtener coordenadas
       var yeisonCoordenada = httpGet("https://maps.googleapis.com/maps/api/geocode/json?address="+direcciones);
       //alert(yeisonCoordenada);
       obj2 = JSON.parse(yeisonCoordenada);
       var lat = JSON.stringify(obj2.results[0].geometry.location.lat);
       var lng = JSON.stringify(obj2.results[0].geometry.location.lng);
       var direccion = JSON.stringify(obj2.results[0].formatted_address);
       // alert(lat + " " + lng + " " + direccion);
       
       var contenido = new obra({
        categoria: "Test fniuserhg",
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
        latitud: lat,
        longitud: lng,
        direccion: direccion
	});
		contenido.save(function(err) {
	  	if (err)
	  		console.log('No se pudo guardar el descuento \n Error: ' + err);
	  	else
	 		console.log('Obra guardada \n');
	});
       
       
       
       
   }
   
   //document.getElementById("demo").innerHTML =
   //obj.results[1].addressComponents.long_name + " " + obj.results[1].addressComponents.short_Name;   
   
   

   