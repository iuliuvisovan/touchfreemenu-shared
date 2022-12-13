"use strict";
var _a;
exports.__esModule = true;
exports.UserPatchType = exports.BusinessMediumType = exports.ReferralSource = exports.EuroEquivalences = exports.CurrencyCode = void 0;
var CurrencyCode;
(function (CurrencyCode) {
    CurrencyCode["Ron"] = "ron";
    CurrencyCode["Mdl"] = "mdl";
})(CurrencyCode = exports.CurrencyCode || (exports.CurrencyCode = {}));
exports.EuroEquivalences = (_a = {},
    _a[CurrencyCode.Ron] = 4.91,
    _a[CurrencyCode.Mdl] = 19.02,
    _a);
var ReferralSource;
(function (ReferralSource) {
    ReferralSource["Facebook"] = "facebook";
    ReferralSource["Google"] = "google";
    ReferralSource["None"] = "none";
})(ReferralSource = exports.ReferralSource || (exports.ReferralSource = {}));
var BusinessMediumType;
(function (BusinessMediumType) {
    BusinessMediumType["Facebook"] = "facebook";
    BusinessMediumType["Instagram"] = "instagram";
    BusinessMediumType["GoogleMaps"] = "googleMaps";
    BusinessMediumType["Coordinates"] = "coordinates";
    BusinessMediumType["Website"] = "website";
    BusinessMediumType["Email"] = "email";
    BusinessMediumType["PhoneNumber"] = "phoneNumber";
})(BusinessMediumType = exports.BusinessMediumType || (exports.BusinessMediumType = {}));
var UserPatchType;
(function (UserPatchType) {
    UserPatchType["WifiInfo"] = "wifiInfo";
    UserPatchType["Location"] = "location";
    UserPatchType["BusinessMedium"] = "businessMedium";
    UserPatchType["DefaultCurrency"] = "defaultCurrency";
    UserPatchType["PartyMode"] = "partyMode";
    UserPatchType["IsUsingPartyMode"] = "isUsingPartyMode";
    UserPatchType["FromAdminInterface"] = "fromAdminInterface";
    UserPatchType["IsUsingMenuSections"] = "isUsingMenuSections";
})(UserPatchType = exports.UserPatchType || (exports.UserPatchType = {}));
