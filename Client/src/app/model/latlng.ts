import { LatLng } from 'angular2-google-maps/core';

export class MyLatLng implements LatLng {

  public lat: number;
  public lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng= lng;
  }

}
