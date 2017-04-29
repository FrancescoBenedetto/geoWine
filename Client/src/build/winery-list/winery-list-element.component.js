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
var WineryListElementComponent = (function () {
    function WineryListElementComponent() {
        this.mouseOver = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.baseImgsPath = 'src/assets/images/wineries/';
    }
    Object.defineProperty(WineryListElementComponent.prototype, "winery", {
        set: function (winery) {
            var _this = this;
            if (winery == null) {
                return;
            }
            this._winery = winery;
            this._winery.image = this.baseImgsPath + '/' + this._winery.id + '/logo.jpg';
            this._winery.wines.map(function (wine) { return wine.image = _this.baseImgsPath + _this._winery.id + '/' + wine.id + '.jpg'; });
        },
        enumerable: true,
        configurable: true
    });
    WineryListElementComponent.prototype.onMouseOver = function () {
        this.mouseOver.emit(this._winery.id);
    };
    WineryListElementComponent.prototype.onMouseOut = function () {
        this.mouseOut.emit(this._winery.id);
    };
    return WineryListElementComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WineryListElementComponent.prototype, "mouseOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WineryListElementComponent.prototype, "mouseOut", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
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