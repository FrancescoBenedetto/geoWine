"use strict";
var WineListItem = (function () {
    function WineListItem(wine, image) {
        this.id = wine.id;
        this.name = wine.name;
        this.description = wine.description;
        this.type = wine.type;
        this.image = image;
    }
    return WineListItem;
}());
exports.WineListItem = WineListItem;
//# sourceMappingURL=wineListItem.js.map