'use strict';

var server = require('server');

server.get('HelloWorld', function(req,res,next){
    var myvariable = "just a string"
    res.render("training/myfirsttemplate", { myvariable: myvariable });
    return next();
});


server.get('RenderTemplate', function(req, res, next){
    res.render("training/dummy");
    return next();
});

server.get('TestRemoteInclude', function(req, res, next){
    res.render("training/2nddummy");
    return next();
});

server.get('TestDecorator', function(req, res, next){
    res.render("training/3rddummy");
    return next();
});

server.get('TestCustomTag', function(req, res, next){
    res.render("training/contentAsset_test");
    return next();
});

server.get('Basket', function(req,res,next){
    var BasketMgr = require('dw/order/BasketMgr');
    // var CartModel = require('*/cartridge/models/cart');
    var Basket = BasketMgr.getCurrentBasket();
    //res.setViewData(Basket);
    //var Basket = new CartModel(currentBasket);
    res.render("training/showBasket", { Basket: Basket});
    return next();

});

module.exports = server.exports();