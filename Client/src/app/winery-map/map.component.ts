import { Component, Input } from '@angular/core';
import { Winery } from '../model/winery';
import { WineryMapItem } from './wineryMapItem';


@Component({
  selector: 'wineries-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class WineriesMapComponent {

  wineryMapItems: WineryMapItem[];

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
}
