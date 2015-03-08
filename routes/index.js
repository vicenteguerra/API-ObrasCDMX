var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Hack CDMX' });
});

// CRON JOB
var crontab = require('node-crontab');
var jobId = crontab.scheduleJob("*/1 * * * *", function(){ //This will call this function every 2 minutes 
    console.log("It's been 1 minutes!");
});

module.exports = router;
