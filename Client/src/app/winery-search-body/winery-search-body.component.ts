import { Component, ViewChild } from '@angular/core';
import { WineriesMapComponent } from '../winery-map/map.component';



@Component({
  selector: 'winery-search-body',
  templateUrl: './winery-search-body.component.html',
  styleUrls: ['./winery-search-body.component.css']
})


export class WinerySearchBodyComponent {

  @ViewChild(WineriesMapComponent)
    private wineryMap: WineriesMapComponent;

  constructor() {}

}
