"use strict";
exports.__esModule = true;
exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType["CreateRegistrationRequest"] = "CreateRegistrationRequest";
    ActionType["RegisterWithFacebook"] = "RegisterWithFacebook";
    ActionType["FinalizeAccountFromSocial"] = "FinalizeAccountFromSocial";
    ActionType["CreateAccount"] = "CreateAccount";
    ActionType["ResendActivationEmail"] = "ResendActivationEmail";
    ActionType["ConfirmEmailAddress"] = "ConfirmEmailAddress";
    ActionType["SetLogo"] = "SetLogo";
    ActionType["SetLogoScale"] = "SetLogoScale";
    ActionType["SetCoverPhoto"] = "SetCoverPhoto";
    ActionType["SetCoverPhotoScale"] = "SetCoverPhotoScale";
    ActionType["CreateOrder"] = "CreateOrder";
    ActionType["PayOrderViaOnlineCard"] = "PayOrderViaOnlineCard";
    ActionType["Login"] = "Login";
    ActionType["LoginWithFacebook"] = "LoginWithFacebook";
    ActionType["GetRegistrationRequest"] = "GetRegistrationRequest";
    ActionType["ClickOnResetLink"] = "ClickOnResetLink";
    ActionType["SendPasswordResetEmail"] = "SendPasswordResetEmail";
    ActionType["CompletePasswordReset"] = "CompletePasswordReset";
    ActionType["SetBusinessMedium"] = "SetBusinessMedium";
    ActionType["SetProductSuggestion"] = "SetProductSuggestion";
    ActionType["CreateCategory"] = "CreateCategory";
    ActionType["CreateProduct"] = "CreateProduct";
    ActionType["EditCategory"] = "EditCategory";
    ActionType["EditProduct"] = "EditProduct";
    ActionType["AddChildProduct"] = "AddChildProduct";
    ActionType["EditChildProduct"] = "EditChildProduct";
    ActionType["RemoveCategory"] = "RemoveCategory";
    ActionType["RemoveProduct"] = "RemoveProduct";
    ActionType["MoveCategory"] = "MoveCategory";
    ActionType["MoveProduct"] = "MoveProduct";
    ActionType["TransferProduct"] = "TransferProduct";
    ActionType["ToggleProductStock"] = "ToggleProductStock";
    ActionType["TogglePartyMode"] = "TogglePartyMode";
    ActionType["CancelOrder"] = "CancelOrder";
    ActionType["GetCurrentUser"] = "GetCurrentUser";
    ActionType["AdminConfirmBankPayment"] = "AdminConfirmBankPayment";
    ActionType["AdminConfirmDelivery"] = "AdminConfirmDelivery";
    ActionType["AdminRemindExpiry"] = "AdminRemindExpiry";
    ActionType["ViewArticle"] = "ViewArticle";
    ActionType["RequestNewLanguages"] = "RequestNewLanguages";
    ActionType["RequestSetLanguages"] = "RequestSetLanguages";
    ActionType["SucceedSetLanguages"] = "SucceedSetLanguages";
    ActionType["ChangePassword"] = "ChangePassword";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
