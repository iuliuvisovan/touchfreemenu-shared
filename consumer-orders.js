"use strict";
exports.__esModule = true;
exports.getOrderProductViewModel = exports.computeConsumerOrderPrice = exports.ConsumerOrderPatchType = exports.WaiterResponseType = exports.ConsumerOrderType = exports.ConsumerOrderPaymentType = void 0;
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
var computeConsumerOrderPrice = function (_a) {
    var products = _a.products;
    var invalidProduct = products.find(function (x) { return typeof x.effectivePrice === 'undefined' || x.effectivePrice === null; });
    if (invalidProduct) {
        throw new Error("Attempted to order product ".concat(JSON.stringify(invalidProduct), " without a price!!!"));
    }
    var totalPrice = (products || [])
        .map(function (orderProduct) {
        var effectivePrice = orderProduct.effectivePrice, quantity = orderProduct.quantity;
        return +effectivePrice * +quantity;
    })
        .reduce(function (a, b) { return a + b; }, 0);
    return totalPrice;
};
exports.computeConsumerOrderPrice = computeConsumerOrderPrice;
function getOrderProductViewModel(orderProduct, fullProduct) {
    var viewModel = {
        quantity: orderProduct.quantity,
        addedInOrderAt: orderProduct.addedInOrderAt,
        productId: orderProduct.productId,
        oldPrice: orderProduct.oldPrice,
        effectivePrice: orderProduct.effectivePrice,
        quantities: orderProduct.quantities,
        kcalories: orderProduct.kcalories,
        // Replace name so that the Waiter sees it in Romanian
        name: fullProduct.name,
        imageUrl: fullProduct.imageUrl,
        thumbnailUrl: fullProduct.thumbnailUrl,
        isWhiteSquare: fullProduct.isWhiteSquare,
        isGeneric: fullProduct.isGeneric,
        isEnriched: true
    };
    return viewModel;
}
exports.getOrderProductViewModel = getOrderProductViewModel;
