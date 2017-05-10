import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Winery } from '../model/winery';
import { WineryMapItem } from './wineryMapItem';
import { LatLngBounds } from 'angular2-google-maps/core';


@Component({
  selector: 'wineries-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class WineriesMapComponent {

  wineryMapItems: WineryMapItem[];
  latLngBounds: LatLngBounds;
  @Output() idle = new EventEmitter<LatLngBounds>();
  latitude: number = 41.727715; longitude: number = 12.359806; zoom: number = 6;

  constructor() { }

  @Input()
  set wineries(wineries: Winery[]) {
    if (wineries == null) { return; }
    this.wineryMapItems = wineries.map(winery => new WineryMapItem(winery));
  }

  highlight(wineryId: number): void {
    let indexOf: number = this.wineryMapItems.findIndex(wineryMapItem => wineryMapItem.id === wineryId);
    this.wineryMapItems[indexOf].highlight();
  }

  reset(wineryId: number): void {
    let indexOf: number = this.wineryMapItems.findIndex(wineryMapItem => wineryMapItem.id === wineryId);
    this.wineryMapItems[indexOf].reset();
  }

  updateBounds(bounds: LatLngBounds) {
    this.latLngBounds = bounds;
  }

  onIdle() {
    this.idle.emit(this.latLngBounds);
  }

  updateCenter(latlng: any) {
    this.latitude = latlng.getLat();
    this.longitude = latlng.getLng();
    //this.idle.emit(this.latLngBounds);
  }

}
