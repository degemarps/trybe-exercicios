"use strict";
var yearMonths;
(function (yearMonths) {
    yearMonths[yearMonths["janeiro"] = 1] = "janeiro";
    yearMonths[yearMonths["fevereiro"] = 2] = "fevereiro";
    yearMonths[yearMonths["marco"] = 3] = "marco";
    yearMonths[yearMonths["abril"] = 4] = "abril";
    yearMonths[yearMonths["maio"] = 5] = "maio";
    yearMonths[yearMonths["junho"] = 6] = "junho";
    yearMonths[yearMonths["julho"] = 7] = "julho";
    yearMonths[yearMonths["agosto"] = 8] = "agosto";
    yearMonths[yearMonths["setembro"] = 9] = "setembro";
    yearMonths[yearMonths["outubro"] = 10] = "outubro";
    yearMonths[yearMonths["novembro"] = 11] = "novembro";
    yearMonths[yearMonths["dezembro"] = 12] = "dezembro";
})(yearMonths || (yearMonths = {}));
;
console.log(yearMonths);
