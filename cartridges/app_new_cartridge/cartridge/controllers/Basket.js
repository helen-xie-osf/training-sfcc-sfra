'use strict';

var server = require('server');

server.get('Start', function(req,res,next){
    var BasketMgr = require('dw/order/BasketMgr');
    var CartModel = require('*/cartridge/models/cart');
    var currentBasket = BasketMgr.getCurrentBasket();
    //res.setViewData(Basket);
    var basketModel = new CartModel(currentBasket);
    //res.render("training/showBasket", { Basket: Basket});
    res.render("training/showBasket", basketModel);
    return next();

});

module.exports = server.exports();