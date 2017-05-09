export class LatLng {

  public lat: number;
  public lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng= lng;
  }
  
  getLat() {
    return this.lat;
  }
  
  getLng() {
    return this.lng;
  }

}
