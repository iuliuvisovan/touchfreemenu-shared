"use strict";
exports.__esModule = true;
exports.computeConsumerIntentPrice = exports.ConsumerOrderType = exports.ConsumerOrderPaymentType = void 0;
var ConsumerOrderPaymentType;
(function (ConsumerOrderPaymentType) {
    ConsumerOrderPaymentType["BankTransfer"] = "BankTransfer";
    ConsumerOrderPaymentType["OnlineCard"] = "OnlineCard";
    ConsumerOrderPaymentType["Cash"] = "Cash";
})(ConsumerOrderPaymentType = exports.ConsumerOrderPaymentType || (exports.ConsumerOrderPaymentType = {}));
var ConsumerOrderType;
(function (ConsumerOrderType) {
    ConsumerOrderType["AtTable"] = "AT_TABLE";
    ConsumerOrderType["Delivery"] = "DELIVERY";
    ConsumerOrderType["PickUp"] = "PICK_UP";
})(ConsumerOrderType = exports.ConsumerOrderType || (exports.ConsumerOrderType = {}));
var computeConsumerIntentPrice = function (orderIntent) {
    var totalPrice = orderIntent.products
        .map(function (productIntent) {
        var product = productIntent.product, quantity = productIntent.quantity;
        var effectiveProductPrice = product.isDiscounted ? product.discountedPrice : product.price;
        return +effectiveProductPrice * +quantity;
    })
        .reduce(function (a, b) { return a + b; });
    return totalPrice;
};
exports.computeConsumerIntentPrice = computeConsumerIntentPrice;
