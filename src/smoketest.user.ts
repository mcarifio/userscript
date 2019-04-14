// ==UserScript==
// @name         smoketest.user.js
// @namespace    http://mike.carif.io/
// @version      0.1
// @description  smoketest
// @author       Mike Carifio <mike@carif.io>
// testing
// @match        http://0.0.0.0:4500/*
// @match        http://localhost:4500/*
// @grant        none
// ==/UserScript==

// @ require     
// multiple matches allowed


function main(d: Date, message: string = 'main') : void {
    let response = `${message}: ${d}`;
    alert(response);
    console.log(response);
}

main(new Date());
