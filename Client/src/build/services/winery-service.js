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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var WineryService = (function () {
    function WineryService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.wineriesUrl = '';
        this.baseUrl = 'http://localhost:3000/';
    }
    WineryService.prototype.getTopTenWineries = function () {
        var topTenWineriesUrl = 'winery/search/getTopTenWineries';
        return this.http.get(this.baseUrl + topTenWineriesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(console.log);
    };
    WineryService.prototype.getWineriesIn = function (latLngBounds) {
        var wineriesInUrl = 'winery/search/getWineriesIn';
        var params = new http_1.URLSearchParams();
        params.set('minLat', latLngBounds.getSouthWest().lat());
        params.set('maxLat', latLngBounds.getNorthEast().lat());
        params.set('minLng', latLngBounds.getSouthWest().lng());
        params.set('maxLng', latLngBounds.getNorthEast().lng());
        return this.http.get(this.baseUrl + wineriesInUrl, { search: params })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(console.log);
    };
    return WineryService;
}());
WineryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WineryService);
exports.WineryService = WineryService;
//# sourceMappingURL=winery-service.js.map