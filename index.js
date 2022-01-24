"use strict";
exports.__esModule = true;
exports.availableSubscriptions = exports.availableHolders = exports.HolderCode = exports.SubscriptionCode = exports.PaymentType = exports.ProductType = exports.BillingType = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Initiated"] = "INITIATED";
    OrderStatus["InProgress"] = "IN_PROGRESS";
    OrderStatus["Failed"] = "FAILED";
    OrderStatus["Paid"] = "PAID";
    OrderStatus["CurrentlyFulfilling"] = "CURRENTLY_FULLFILLING";
    OrderStatus["Fulfilled"] = "FULFILLED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var BillingType;
(function (BillingType) {
    BillingType["Company"] = "company";
    BillingType["NaturalPerson"] = "natural_person";
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
exports.availableHolders = [
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
exports.availableSubscriptions = [
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
