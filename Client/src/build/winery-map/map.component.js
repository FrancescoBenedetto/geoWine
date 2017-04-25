"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var wineryMapItem_1 = require("./wineryMapItem");
var WineriesMapComponent = (function () {
    function WineriesMapComponent() {
        this.baseImgUrl = 'src/assets/images/map/';
    }
    Object.defineProperty(WineriesMapComponent.prototype, "wineries", {
        set: function (wineries) {
            if (wineries == null) {
                return;
            }
            this.wineryMapItems = wineries.map(function (winery) {
                var icon = {
                    url: 'src/assets/images/map/wine_icon.svg',
                    scaledSize: {
                        height: 35,
                        width: 30
                    }
                };
                return new wineryMapItem_1.WineryMapItem(winery, icon);
            });
        },
        enumerable: true,
        configurable: true
    });
    return WineriesMapComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], WineriesMapComponent.prototype, "wineries", null);
WineriesMapComponent = __decorate([
    core_1.Component({
        selector: 'wineries-map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.css']
    }),
    __metadata("design:paramtypes", [])
], WineriesMapComponent);
exports.WineriesMapComponent = WineriesMapComponent;
//# sourceMappingURL=map.component.js.map