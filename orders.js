"use strict";
exports.__esModule = true;
exports.computeIntentPrice = exports.AVAILABLE_SUBSCRIPTIONS = exports.AVAILABLE_HOLDERS = exports.HolderCode = exports.SubscriptionCode = exports.CourierCompany = exports.PaymentType = exports.ProductType = exports.BillingType = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Initiated"] = "INITIATED";
    OrderStatus["WaitingForOnlinePayment"] = "WAITING_FOR_ONLINE_PAYMENT";
    OrderStatus["WaitingForBankPayment"] = "WAITING_FOR_BANK_PAYMENT";
    OrderStatus["Paid"] = "PAID";
    OrderStatus["CurrentlyFulfilling"] = "CURRENTLY_FULLFILLING";
    OrderStatus["PendingActivation"] = "PENDING_ACTIVATION";
    OrderStatus["Activated"] = "ACTIVATED";
    OrderStatus["Failed"] = "FAILED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var BillingType;
(function (BillingType) {
    BillingType["Company"] = "Company";
    BillingType["NaturalPerson"] = "NaturalPerson";
})(BillingType = exports.BillingType || (exports.BillingType = {}));
var ProductType;
(function (ProductType) {
    ProductType["Subscription"] = "Subscription";
    ProductType["Holder"] = "Holder";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
var PaymentType;
(function (PaymentType) {
    PaymentType["BankTransfer"] = "BankTransfer";
    PaymentType["OnlineCard"] = "OnlineCard";
})(PaymentType = exports.PaymentType || (exports.PaymentType = {}));
var CourierCompany;
(function (CourierCompany) {
    CourierCompany["Cargus"] = "cargus";
    CourierCompany["FanCourier"] = "fan_courier";
    CourierCompany["Sameday"] = "sameday";
    CourierCompany["Dpd"] = "dpd";
    CourierCompany["NemoExpress"] = "nemo_express";
    CourierCompany["Gls"] = "gls";
})(CourierCompany = exports.CourierCompany || (exports.CourierCompany = {}));
var SubscriptionCode;
(function (SubscriptionCode) {
    SubscriptionCode["TFMC1"] = "TFM-C-1";
    SubscriptionCode["TFMC6"] = "TFM-C-6";
    SubscriptionCode["TFMC12"] = "TFM-C-12";
})(SubscriptionCode = exports.SubscriptionCode || (exports.SubscriptionCode = {}));
var HolderCode;
(function (HolderCode) {
    HolderCode["Plexiglass"] = "QRH-PLEX";
    HolderCode["Laminated"] = "QRH-LAM";
})(HolderCode = exports.HolderCode || (exports.HolderCode = {}));
exports.AVAILABLE_HOLDERS = [
    {
        code: HolderCode.Plexiglass,
        name: 'Holder vertical plexiglas - A6',
        price: 15
    },
    {
        code: HolderCode.Laminated,
        name: 'Holder orizontal laminat - A6',
        price: 3,
        priceIncreaseSegment: 10
    },
];
exports.AVAILABLE_SUBSCRIPTIONS = [
    {
        code: SubscriptionCode.TFMC1,
        name: 'Touch-Free Menu Complet - o lună',
        price: 49,
        durationInDays: 30
    },
    {
        code: SubscriptionCode.TFMC6,
        name: 'Touch-Free Menu Complet - 6 luni',
        price: 289,
        durationInDays: 180
    },
    {
        code: SubscriptionCode.TFMC12,
        name: 'Touch-Free Menu Complet - 12 luni',
        price: 499,
        durationInDays: 365
    },
];
var computeIntentPrice = function (orderIntent) {
    var _a, _b, _c;
    var _d = orderIntent.plexiglassHolderCount, plexiglassHolderCount = _d === void 0 ? 0 : _d, _e = orderIntent.laminatedHolderCount, laminatedHolderCount = _e === void 0 ? 0 : _e, _f = orderIntent.subscriptionCode, subscriptionCode = _f === void 0 ? '' : _f;
    var plexiglassPrice = ((_a = exports.AVAILABLE_HOLDERS.find(function (x) { return x.code === HolderCode.Plexiglass; })) === null || _a === void 0 ? void 0 : _a.price) || 0;
    var laminatedPrice = ((_b = exports.AVAILABLE_HOLDERS.find(function (x) { return x.code === HolderCode.Laminated; })) === null || _b === void 0 ? void 0 : _b.price) || 0;
    var currentSubscriptionPrice = ((_c = exports.AVAILABLE_SUBSCRIPTIONS.find(function (x) { return x.code === subscriptionCode; })) === null || _c === void 0 ? void 0 : _c.price) || 0;
    var deliveryPrice = plexiglassHolderCount + laminatedHolderCount > 0 ? 15 : 0;
    var totalPrice = plexiglassHolderCount * plexiglassPrice + laminatedHolderCount * laminatedPrice + currentSubscriptionPrice + deliveryPrice;
    return totalPrice;
};
exports.computeIntentPrice = computeIntentPrice;
