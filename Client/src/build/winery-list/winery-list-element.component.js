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
var winery_1 = require("../model/winery");
var wineryListItem_1 = require("./wineryListItem");
var WineryListElementComponent = (function () {
    function WineryListElementComponent() {
        this.mouseOvered = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
    }
    Object.defineProperty(WineryListElementComponent.prototype, "winery", {
        set: function (winery) {
            this.wineryListItem = new wineryListItem_1.WineryListItem(winery);
        },
        enumerable: true,
        configurable: true
    });
    WineryListElementComponent.prototype.onMouseOver = function () {
        this.mouseOvered.emit(this.winery.id);
    };
    WineryListElementComponent.prototype.onMouseOut = function () {
        this.mouseOut.emit(this.winery.id);
    };
    return WineryListElementComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WineryListElementComponent.prototype, "mouseOvered", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WineryListElementComponent.prototype, "mouseOut", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", winery_1.Winery),
    __metadata("design:paramtypes", [winery_1.Winery])
], WineryListElementComponent.prototype, "winery", null);
WineryListElementComponent = __decorate([
    core_1.Component({
        selector: 'winery-list-element',
        templateUrl: './winery-list-element.component.html',
        styleUrls: ['./winery-list-element.component.css']
    }),
    __metadata("design:paramtypes", [])
], WineryListElementComponent);
exports.WineryListElementComponent = WineryListElementComponent;
//# sourceMappingURL=winery-list-element.component.js.map