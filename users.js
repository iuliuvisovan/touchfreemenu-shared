"use strict";
var _a;
exports.__esModule = true;
exports.formatAddress = exports.UserPatchType = exports.BusinessMediumType = exports.ReferralSource = exports.EuroEquivalences = exports.CurrencyCode = void 0;
var CurrencyCode;
(function (CurrencyCode) {
    CurrencyCode["Ron"] = "ron";
    CurrencyCode["Mdl"] = "mdl";
})(CurrencyCode = exports.CurrencyCode || (exports.CurrencyCode = {}));
exports.EuroEquivalences = (_a = {},
    _a[CurrencyCode.Ron] = 4.94,
    _a[CurrencyCode.Mdl] = 20.52,
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
function formatAddress(addressObject) {
    var _a, _b, _c, _d;
    if (!addressObject) {
        return '';
    }
    var address_components = addressObject.address_components;
    var streetName = ((_a = address_components.find(function (x) { return x.types.includes('route'); })) === null || _a === void 0 ? void 0 : _a.short_name) || '';
    var streetNumber = (_b = address_components.find(function (x) { return x.types.includes('street_number'); })) === null || _b === void 0 ? void 0 : _b.short_name;
    var city = (_c = address_components.find(function (x) { return x.types.includes('locality'); })) === null || _c === void 0 ? void 0 : _c.short_name;
    var biggerCity = (((_d = address_components.find(function (x) { return x.types.includes('administrative_area_level_2'); })) === null || _d === void 0 ? void 0 : _d.short_name) || '').replace(/municipiul|comuna|orasul|orașul/i, '');
    var streetAddress = "".concat(streetName.replace(/strada/i, 'str.').replace(/bulevardul/i, 'Bd.') || '', " ").concat(streetNumber || '');
    var relevantCity = biggerCity || city;
    return [streetAddress, relevantCity].filter(function (x) { var _a; return (_a = (x || '')) === null || _a === void 0 ? void 0 : _a.trim(); }).join(', ');
}
exports.formatAddress = formatAddress;
