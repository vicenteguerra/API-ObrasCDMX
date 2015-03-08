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
   for ( i = 1 ; i <numeroObras ; i++)
   {
       // Consulta por id de toda la base de datos
       var yeison1 = httpGet("http://datos.labcd.mx/api/action/datastore_search_sql?sql=SELECT%20*%20from%20%224fe5be8e-389d-4170-a21b-197617a7f064%22%20WHERE%20_id="+i);
       obj1 = JSON.parse(yeison1);
       var direcciones = obj1.result.records[0].calle + " " +obj1.result.records[0].colonia + " DF"
       //API Google para obtener coordenadas
       try{
           
           var yeisonCoordenada = httpGet("https://maps.googleapis.com/maps/api/geocode/json?address="+direcciones);
       obj2 = JSON.parse(yeisonCoordenada);
       var lat = JSON.stringify(obj2.results[0].geometry.location.lat);
       var lng = JSON.stringify(obj2.results[0].geometry.location.lng);
       var direccion = JSON.stringify(obj2.results[0].formatted_address);
       
       var contenido = new obra({
        categoria: obj1.result.records[0].categoria,
        tipo_vialidad: obj1.result.records[0].tipo_de_vialidad,
        longitud: obj1.result.records[0].longitud_m ,
        superficie: obj1.result.records[0].superficie_m2 ,
        status: obj1.result.records[0].estatus,
        delegacion: obj1.result.records[0].delegacion,
        colonia: obj1.result.records[0].colonia,
        calle: obj1.result.records[0].calle,
        fecha_inicio: obj1.result.records[0].fecha_de_inicio,
        fecha_termino: obj1.result.records[0].fecha_de_termino ,
        area_responsable: obj1.result.records[0].area_de_adscripcion_responsable ,
        afectaciones: obj1.result.records[0].afectacion_en,
        descripcion: obj1.result.records[0].descripcion_de_los_trabajos,
        ente_responsable:obj1.result.records[0].ente_responsable ,
        rubro: obj1.result.records[0].rubro,
        entre_calle1:obj1.result.records[0].entre_calle ,
        entre_calle2:obj1.result.records[0].y_calle ,
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
           
       }catch(err){
           console.log("No se guardo: "+err+ "Numero: "+i);
       }
       
       
       
       
       
   }
   
   //document.getElementById("demo").innerHTML =
   //obj.results[1].addressComponents.long_name + " " + obj.results[1].addressComponents.short_Name;   
   
   

   