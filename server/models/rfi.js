'use strict';

module.exports = function(Rfi) {
    Rfi.listRfi = async (title) => {
        let res =  {Name: title};
        return res;
        
    }
    Rfi.afterRemote('listRfi', async (ctx, res) => {
        //console.log(ctx);
        //console.log(res);
        ctx.res.header({
            'Content-Type': 'somenath/dey',
            'Content-disposition': 1234567890,
            'File-Name' : `${res.Name}`
        })
        return
    });

};
