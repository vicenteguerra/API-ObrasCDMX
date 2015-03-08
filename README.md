Obras CDMX

OBRAS CDMX soluciona una problemática surgida a partir de una necesidad de la
Agencia de Gestión Urbana (AGU) de la Ciudad de México para regular las intervenciones
en la vía pública por parte de instituciones públicas y privadas.

Permitir al ciudadano prevenirse ante las diversas eventualidades que ocasionan
las intervenciones en la vía pública.

---------------------------------------------------------------------------------

API ObrasCDMX

GET https://henry-brenda.codio.io:9500/datos

Devuelve un JSON con información de las obras en vías públicas que se van a realizar
o se estan realizando en la Ciudad de México

Estructura:

{
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
}

Node JS + Express JS

Dependencias:

	"express"
    "body-parser"
    "cookie-parser"
    "morgan"
    "mongoose"
    "serve-favicon"
    "debug"
    "jade"
    "mongodb"

Base de datos en MongoDB
Obrascmdx



