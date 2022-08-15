'use strict';

var server = require('server');
var controller = require('app_storefront_base/cartridge/controllers/Home')

server.extend(controller)



server.append('Show', function(req, res, next){
    //var myvariable = "just a string"
    //res.render("home/homepage", { myvariable: myvariable });
    var viewData = res.getViewData();
    viewData.example = "One String";

    res.setViewData(viewData);
    return next();

});

module.exports = server.exports();