// ==UserScript==
// @name         us0
// @namespace    http://mike.carif.io/
// @version      0.1
// @description  userscript 0
// @author       Mike Carifio <mike@carif.io>
// @match        *
// @match        https://mike.carif.io/.user.js/*
// @grant        none
// ==/UserScript==

// @ require     
// multiple matches allowed

(function() {
    'use strict';
    var now = new Date();
    var message = 'us0 ' + now;
    alert(message);
    console.log(message);    
})();
