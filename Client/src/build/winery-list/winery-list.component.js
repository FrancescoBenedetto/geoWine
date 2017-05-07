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
var winery_service_1 = require("../services/winery-service");
var WineryListComponent = (function () {
    function WineryListComponent(wineryService) {
        this.wineryService = wineryService;
        this.wineries = [];
        this.mouseOveredWineryEvent = new core_1.EventEmitter();
        this.mouseOutWineryEvent = new core_1.EventEmitter();
    }
    WineryListComponent.prototype.getWineries = function () {
        var _this = this;
        this.wineryService
            .getTopTenWineries()
            .then(function (wineries) {
            _this.wineries = wineries;
        });
    };
    WineryListComponent.prototype.ngOnInit = function () {
        this.getWineries();
    };
    WineryListComponent.prototype.mouseOverWinery = function (wineryId) {
        this.mouseOveredWineryEvent.emit(wineryId);
    };
    WineryListComponent.prototype.mouseOutWinery = function (wineryId) {
        this.mouseOutWineryEvent.emit(wineryId);
    };
    WineryListComponent.prototype.mapIdle = function (latLngBounds) {
        var _this = this;
        this.wineryService
            .getWineriesIn(latLngBounds)
            .then(function (wineries) { return _this.wineries = wineries; });
    };
    return WineryListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WineryListComponent.prototype, "mouseOveredWineryEvent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WineryListComponent.prototype, "mouseOutWineryEvent", void 0);
WineryListComponent = __decorate([
    core_1.Component({
        selector: 'winery-list',
        templateUrl: './winery-list.component.html',
        styleUrls: ['./winery-list.component.css']
    }),
    __metadata("design:paramtypes", [winery_service_1.WineryService])
], WineryListComponent);
exports.WineryListComponent = WineryListComponent;
//# sourceMappingURL=winery-list.component.js.map