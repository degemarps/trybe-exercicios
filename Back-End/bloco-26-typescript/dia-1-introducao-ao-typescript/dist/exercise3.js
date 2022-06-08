"use strict";
var seasons;
(function (seasons) {
    seasons[seasons["outono"] = 1] = "outono";
    seasons[seasons["inverno"] = 2] = "inverno";
    seasons[seasons["primavera"] = 3] = "primavera";
    seasons[seasons["verao"] = 4] = "verao";
})(seasons || (seasons = {}));
;
console.log(seasons);
