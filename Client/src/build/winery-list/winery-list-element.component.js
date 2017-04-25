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
var WineryListElementComponent = (function () {
    function WineryListElementComponent() {
        this.mouseOvered = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.imgsBasePath = 'src/assets/images/wineries/';
    }
    WineryListElementComponent.prototype.ngOnInit = function () {
        var thisImgsBasePath = this.imgsBasePath + +this.winery.id + '/';
        this.wineryLogo = thisImgsBasePath + 'logo.jpg';
        this.wineImgs = this.winery.wines
            .map(function (wine) { return thisImgsBasePath + wine.id + '.jpg'; });
    };
    WineryListElementComponent.prototype.onMouseOver = function () {
        this.mouseOvered.emit(this.winery.id);
    };
    WineryListElementComponent.prototype.onMouseOut = function () {
        this.mouseOut.emit(this.winery.id);
    };
    return WineryListElementComponent;
}());
__decorate([
    core_1.Input('winery'),
    __metadata("design:type", winery_1.Winery)
], WineryListElementComponent.prototype, "winery", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WineryListElementComponent.prototype, "mouseOvered", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WineryListElementComponent.prototype, "mouseOut", void 0);
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