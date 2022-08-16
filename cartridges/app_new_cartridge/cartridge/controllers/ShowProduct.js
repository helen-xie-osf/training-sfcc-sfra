'use strict';

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var ProductMgr = require('dw/catalog/ProductMgr');


// server.get('Start', server.middleware.https,function(req,res,next){

//     var myProduct = null;
//     var productID = req.querystring.pid;
//     if (typeof productID === 'string') {
//         myProduct = ProductMgr.getProduct(productID);
//     }

//     // ProductModel.get = function (productID) {
//     //     var obj = null;
//     //     if (typeof productID === 'string') {
//     //         obj = ProductMgr.getProduct(parameter);
//     //     }
//     //     return new ProductModel(obj);
//     // };

//     res.render("training/productfound", { myProduct: myProduct });

//     return next();
// });

server.get('Start', function(req, res, next){

    var myProduct = ProductMgr.getProduct(req.querystring.pid);
    //var myProductID = req.querystring.pid;

    res.render("training/productfound", { myProduct: myProduct });
    return next();
});





module.exports = server.exports();