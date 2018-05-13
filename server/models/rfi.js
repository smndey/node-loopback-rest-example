'use strict';

module.exports = function(Rfi) {
    Rfi.listRfi = function(title, callback) {
        console.log(title);
        var DataAPI = Rfi.app.datasources.DataAPI;
        return callback(null, {'Title': title});
        //console.log(DataAPI.accessToken);
    }

};
