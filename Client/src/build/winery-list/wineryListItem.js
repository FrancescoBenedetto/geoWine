"use strict";
var wineListItem_1 = require("./wineListItem");
var baseImgsPath = 'src/assets/images/wineries/';
var WineryListItem = (function () {
    function WineryListItem(winery) {
        this.id = winery.id;
        this.name = winery.name;
        this.image = baseImgsPath + this.id + '/logo.jpg';
        this.wines = winery.wines.map(function (wine) { return new wineListItem_1.WineListItem(wine, baseImgsPath + winery.id + '/' + wine.id + '.jpg'); });
    }
    return WineryListItem;
}());
exports.WineryListItem = WineryListItem;
//# sourceMappingURL=wineryListItem.js.map