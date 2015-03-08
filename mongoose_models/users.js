/**
* Created with APIhackCDMX.
* User: vicenteguerra
* Date: 2015-03-08
* Time: 04:22 PM
* To change this template use Tools | Templates.
*/
var mongoose  = require ('mongoose'),
    Schema    = mongoose.Schema;

var UsersSchema = new Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    password: {type: String},
    cstreet: {type: String},
    colony: {type: String},
    delegation: {type: String},    
});

module.exports = mongoose.model( 'users', UsersSchema );