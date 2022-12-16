"use strict";
exports.__esModule = true;
exports.computeConsumerOrderPrice = exports.ConsumerOrderPatchType = exports.WaiterResponseType = exports.ConsumerOrderType = exports.ConsumerOrderPaymentType = void 0;
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
var WaiterResponseType;
(function (WaiterResponseType) {
    WaiterResponseType["Accepted"] = "ACCEPTED";
    WaiterResponseType["Rejected"] = "REJECTED";
})(WaiterResponseType = exports.WaiterResponseType || (exports.WaiterResponseType = {}));
var ConsumerOrderPatchType;
(function (ConsumerOrderPatchType) {
    ConsumerOrderPatchType["ClientPushToken"] = "clientPushToken";
    ConsumerOrderPatchType["WaiterResponse"] = "waiterResponse";
})(ConsumerOrderPatchType = exports.ConsumerOrderPatchType || (exports.ConsumerOrderPatchType = {}));
var computeConsumerOrderPrice = function (order, isUserPartyMode) {
    var totalPrice = order.products
        .map(function (productIntent) {
        var product = productIntent.product, quantity = productIntent.quantity;
        var _a = product || {}, price = _a.price, isDiscounted = _a.isDiscounted, discountedPrice = _a.discountedPrice, priceDuringEvent = _a.priceDuringEvent;
        var effectiveProductPrice = isUserPartyMode && priceDuringEvent ? priceDuringEvent : isDiscounted && discountedPrice ? discountedPrice : price;
        return +effectiveProductPrice * +quantity;
    })
        .reduce(function (a, b) { return a + b; });
    return totalPrice;
};
exports.computeConsumerOrderPrice = computeConsumerOrderPrice;
