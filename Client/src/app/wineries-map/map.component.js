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
var GMapService_1 = require("../services/GMapService");
var core_2 = require("@angular/core");
var WineriesMapComponent = (function () {
    function WineriesMapComponent(geocoderService) {
        this.geocoderService = geocoderService;
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    WineriesMapComponent.prototype.ngAfterViewInit = function () {
        this.geocoderService.getLatLan("via Aldeno 19")
            .subscribe(function (value) { return console.log(value); });
    };
    return WineriesMapComponent;
}());
WineriesMapComponent = __decorate([
    core_1.Component({
        selector: 'wineries-map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.css'],
        providers: [GMapService_1.GMapsService]
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [GMapService_1.GMapsService])
], WineriesMapComponent);
exports.WineriesMapComponent = WineriesMapComponent;
//# sourceMappingURL=map.component.js.map