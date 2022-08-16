'use strict';

var server = require('server');

server.get('HelloWorld', function(req,res,next){
    var myvariable = req.sessionVar;
    res.render("training/vartest", { myvariable: myvariable });
    return next();
});


module.exports = server.exports();