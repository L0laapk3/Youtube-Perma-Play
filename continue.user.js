// ==UserScript==
// @name         Youtube perma play
// @namespace    http://tampermonkey.net/
// @version      1
// @description  auto click the "video interrupted" button
// @author       L0laapk3
// @match        *://www.youtube.com/*
// @updateURL    https://cdn.jsdelivr.net/gh/L0laapk3/Youtube-Perma-Play/continue.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/L0laapk3/Youtube-Perma-Play/continue.user.js
// @grant        none
// ==/UserScript==

(function() {

    setInterval(function() {
        if ((a = document.querySelector("yt-confirm-dialog-renderer .paper-dialog-scrollable yt-formatted-string")) && a.innerHTML.toLowerCase().indexOf("video onderbroken") != -1) document.querySelector("#confirm-button").click()
    }, 10 * 1000);
})();