"use strict";
var Winery = (function () {
    function Winery(id, name, nation, region, latitude, longitude, address, wines) {
        this.id = id;
        this.name = name;
        this.nation = nation;
        this.region = region;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
        this.wines = wines;
    }
    return Winery;
}());
exports.Winery = Winery;
//# sourceMappingURL=winery.js.map