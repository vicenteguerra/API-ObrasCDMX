var express = require('express');
//var Intervenciones = require('../models/intervenciones')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Hack CDMX' });
});

// CRON JOB
var crontab = require('node-crontab');
var jobId = crontab.scheduleJob("*/30 * * * *", function(){ //This will call this function every 2 minutes 
    console.log("Entro al cron");
    //var intervenciones = new Intervenciones();
});

module.exports = router;
