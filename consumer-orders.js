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
    ConsumerOrderPatchType["ConsumerPushToken"] = "consumerPushToken";
    ConsumerOrderPatchType["WaiterResponse"] = "waiterResponse";
})(ConsumerOrderPatchType = exports.ConsumerOrderPatchType || (exports.ConsumerOrderPatchType = {}));
var computeConsumerOrderPrice = function (order) {
    var invalidProduct = order.products.find(function (x) { return typeof x.effectivePrice === 'undefined' || x.effectivePrice === null; });
    if (invalidProduct) {
        throw new Error("Attempted to order product ".concat(JSON.stringify(invalidProduct), " without a price!!!"));
    }
    var totalPrice = ((order === null || order === void 0 ? void 0 : order.products) || [])
        .map(function (orderProduct) {
        var effectivePrice = orderProduct.effectivePrice, quantity = orderProduct.quantity;
        return +effectivePrice * +quantity;
    })
        .reduce(function (a, b) { return a + b; }, 0);
    return totalPrice;
};
exports.computeConsumerOrderPrice = computeConsumerOrderPrice;
