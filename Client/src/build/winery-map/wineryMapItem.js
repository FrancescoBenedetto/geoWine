"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var winery_1 = require("../model/winery");
var WineryMapItem = (function (_super) {
    __extends(WineryMapItem, _super);
    function WineryMapItem(winery, icon) {
        var _this = _super.call(this, winery.id, winery.name, winery.nation, winery.region, winery.latitude, winery.longitude, winery.address, winery.wines) || this;
        _this.icon = icon;
        return _this;
    }
    return WineryMapItem;
}(winery_1.Winery));
exports.WineryMapItem = WineryMapItem;
//# sourceMappingURL=wineryMapItem.js.map