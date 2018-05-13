'use strict';

module.exports = function(Rfi) {
    Rfi.listRfi = function(title, callback) {
        console.log(title);
        console.log(Rfi.customTitle());
        var DataAPI = Rfi.app.datasources.DataAPI;
        return callback(null, {'Title': title});
        //console.log(DataAPI.accessToken);
    }
    Rfi.remoteMethod('listRfi', {
        accepts: {arg: 'title', type: 'string'},
        returns: {arg: 'data', type: 'object'},
    });
    
    Rfi.customTitle = function() {
        //console.log(this);
    }

};
