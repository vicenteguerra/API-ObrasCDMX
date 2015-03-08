/**
* Created with APIhackCDMX.
* User: javietelioz
* Date: 2015-03-08
* Time: 04:56 PM
* To change this template use Tools | Templates.
*/

/**
 * URL API
 */
const API_URL = 'http://datos.labcd.mx/api/action/';

/**
 * basis methods API
 */
var methodsApi = {
    create : "datastore_create",
    update : "datastore_upsert",
    search :"datastore_search",
    avance_search :"datastore_search_sql",
};

var obrasModel = require("../mongoose_models/obras");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var JsonHttpObject = null;

function _get(data, limit) {
    var _resource = API_URL + methodsApi.avance_search + "?sql" + data;
    
    if(null == limit){
        _resource += "&limit=5";
    }
    
    JsonHttpObject = new XMLHttpRequest();
    JsonHttpObject.open("GET", _resource , false);
    JsonHttpObject.send( null );
    return JsonHttpObject.responseText;
}

function _post(data){
    var _resource = API_URL + methodsApi.create + "?";
    
    
    
    JsonHttpObject.open("POST", _resource ,true);
    JsonHttpObject.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    JsonHttpObject.send("fname=Henry&lname=Ford");
}