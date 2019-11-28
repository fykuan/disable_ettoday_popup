// ==UserScript==
// @name         Disable ETtoday popup notification
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ETtoday不要再跳視窗出來問我了
// @author       fykuan
// @include      https://*.ettoday.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var popupBlock = document.getElementsByClassName("et_push_notification");
    var i = 0;
    if (popupBlock.length > 0) {
        for (i = 0; i < popupBlock.length; i++) {
            popupBlock[i].remove();
        }
    }
})();