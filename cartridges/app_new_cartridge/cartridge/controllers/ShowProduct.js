'use strict';

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var ProductMgr = require('dw/catalog/ProductMgr');


server.get('Start', function(req, res, next){

    var myProduct = ProductMgr.getProduct(req.querystring.pid);
    //var myProductID = req.querystring.pid;

    res.render("training/productfound", { myProduct: myProduct });
    return next();
});





module.exports = server.exports();