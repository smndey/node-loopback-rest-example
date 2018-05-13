'use strict';
var Promise = require('bluebird');

module.exports = function(Rfi) {
    Rfi.listRfi = function(title, callback) {
        console.log(title);
        var DataAPI = Rfi.app.datasources.DataAPI;
        
        DataAPI.getUser().then((res) => {
            callback(null, {'Title': title});
        })
        .catch((err) => {
            callback(err, null);
        })
    }
    Rfi.remoteMethod('listRfi', {
        accepts: {arg: 'title', type: 'string'},
        returns: {arg: 'data', type: 'object'},
    });
    
    Rfi.customTitle = function() {
        //console.log(this);
    }

};
