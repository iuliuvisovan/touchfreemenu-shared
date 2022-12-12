"use strict";
exports.__esModule = true;
exports.computeIntentSummary = exports.DELIVERY_PRICE = exports.computeIntentPrice = exports.AVAILABLE_SUBSCRIPTIONS = exports.AVAILABLE_HOLDERS = exports.HolderCode = exports.SubscriptionCode = exports.CourierCompany = exports.PaymentType = exports.ProductType = exports.BillingType = exports.HolderOrderStatus = void 0;
var HolderOrderStatus;
(function (HolderOrderStatus) {
    HolderOrderStatus["Initiated"] = "INITIATED";
    HolderOrderStatus["WaitingForOnlinePayment"] = "WAITING_FOR_ONLINE_PAYMENT";
    HolderOrderStatus["WaitingForBankPayment"] = "WAITING_FOR_BANK_PAYMENT";
    HolderOrderStatus["Paid"] = "PAID";
    HolderOrderStatus["CurrentlyFulfilling"] = "CURRENTLY_FULLFILLING";
    HolderOrderStatus["PendingActivation"] = "PENDING_ACTIVATION";
    HolderOrderStatus["Activated"] = "ACTIVATED";
    HolderOrderStatus["Failed"] = "FAILED";
})(HolderOrderStatus = exports.HolderOrderStatus || (exports.HolderOrderStatus = {}));
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
    HolderCode["Sticker"] = "QRH-STICK";
})(HolderCode = exports.HolderCode || (exports.HolderCode = {}));
exports.AVAILABLE_HOLDERS = [
    {
        code: HolderCode.Plexiglass,
        name: 'Holder vertical plexiglas - A6',
        price: 15
    },
    {
        code: HolderCode.Laminated,
        name: 'Card laminat - A6',
        price: 3,
        priceIncreaseSegment: 10
    },
    {
        code: HolderCode.Sticker,
        name: 'Sticker personalizat - 10x7cm',
        price: 2,
        priceIncreaseSegment: 16
    },
];
exports.AVAILABLE_SUBSCRIPTIONS = [
    {
        code: SubscriptionCode.TFMC1,
        name: 'MeniuDigital Complet - o lună',
        price: 49,
        durationInDays: 30
    },
    {
        code: SubscriptionCode.TFMC6,
        name: 'MeniuDigital Complet - 6 luni',
        price: 289,
        durationInDays: 180
    },
    {
        code: SubscriptionCode.TFMC12,
        name: 'MeniuDigital Complet - 12 luni',
        price: 499,
        durationInDays: 365
    },
];
var computeIntentPrice = function (orderIntent) {
    var _a, _b, _c, _d;
    var _e = orderIntent.plexiglassHolderCount, plexiglassHolderCount = _e === void 0 ? 0 : _e, _f = orderIntent.laminatedHolderCount, laminatedHolderCount = _f === void 0 ? 0 : _f, _g = orderIntent.stickerHolderCount, stickerHolderCount = _g === void 0 ? 0 : _g, _h = orderIntent.subscriptionCode, subscriptionCode = _h === void 0 ? '' : _h;
    var plexiglassPrice = ((_a = exports.AVAILABLE_HOLDERS.find(function (x) { return x.code === HolderCode.Plexiglass; })) === null || _a === void 0 ? void 0 : _a.price) || 0;
    var laminatedPrice = ((_b = exports.AVAILABLE_HOLDERS.find(function (x) { return x.code === HolderCode.Laminated; })) === null || _b === void 0 ? void 0 : _b.price) || 0;
    var stickerPrice = ((_c = exports.AVAILABLE_HOLDERS.find(function (x) { return x.code === HolderCode.Sticker; })) === null || _c === void 0 ? void 0 : _c.price) || 0;
    var currentSubscriptionPrice = ((_d = exports.AVAILABLE_SUBSCRIPTIONS.find(function (x) { return x.code === subscriptionCode; })) === null || _d === void 0 ? void 0 : _d.price) || 0;
    var deliveryPrice = +plexiglassHolderCount + +laminatedHolderCount + +stickerHolderCount > 0 ? 15 : 0;
    var totalPrice = plexiglassHolderCount * plexiglassPrice +
        laminatedHolderCount * laminatedPrice +
        stickerHolderCount * stickerPrice +
        currentSubscriptionPrice +
        deliveryPrice;
    return totalPrice;
};
exports.computeIntentPrice = computeIntentPrice;
exports.DELIVERY_PRICE = 15;
var computeIntentSummary = function (orderIntent) {
    var _a, _b, _c, _d;
    var _e = orderIntent.plexiglassHolderCount, plexiglassHolderCount = _e === void 0 ? 0 : _e, _f = orderIntent.laminatedHolderCount, laminatedHolderCount = _f === void 0 ? 0 : _f, _g = orderIntent.stickerHolderCount, stickerHolderCount = _g === void 0 ? 0 : _g, _h = orderIntent.subscriptionCode, subscriptionCode = _h === void 0 ? '' : _h;
    var plexiglassPrice = ((_a = exports.AVAILABLE_HOLDERS.find(function (x) { return x.code === HolderCode.Plexiglass; })) === null || _a === void 0 ? void 0 : _a.price) || 0;
    var laminatedPrice = ((_b = exports.AVAILABLE_HOLDERS.find(function (x) { return x.code === HolderCode.Laminated; })) === null || _b === void 0 ? void 0 : _b.price) || 0;
    var stickerPrice = ((_c = exports.AVAILABLE_HOLDERS.find(function (x) { return x.code === HolderCode.Sticker; })) === null || _c === void 0 ? void 0 : _c.price) || 0;
    var currentSubscriptionPrice = ((_d = exports.AVAILABLE_SUBSCRIPTIONS.find(function (x) { return x.code === subscriptionCode; })) === null || _d === void 0 ? void 0 : _d.price) || 0;
    var holderPrice = +plexiglassHolderCount + +laminatedHolderCount + +stickerHolderCount;
    var deliveryPrice = holderPrice > 0 ? exports.DELIVERY_PRICE : 0;
    var totalPrice = plexiglassHolderCount * plexiglassPrice +
        laminatedHolderCount * laminatedPrice +
        stickerHolderCount * stickerPrice +
        currentSubscriptionPrice +
        deliveryPrice;
    return {
        totalPrice: totalPrice,
        holderPrice: holderPrice,
        deliveryPrice: deliveryPrice,
        subscriptionPrice: currentSubscriptionPrice,
        hasDelivery: deliveryPrice > 0,
        hasHolders: holderPrice > 0,
        hasSubscription: subscriptionCode.length > 0
    };
};
exports.computeIntentSummary = computeIntentSummary;