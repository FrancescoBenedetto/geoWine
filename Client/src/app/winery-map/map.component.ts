import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Injectable } from '@angular/core';
import { Winery } from '../model/winery';
import { WineryMapItem } from './wineryMapItem';


@Component({
  selector: 'wineries-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class WineriesMapComponent {

  baseImgUrl: string = 'src/assets/images/map/';
  wineryMapItems: WineryMapItem[];

  constructor() {}

  @Input()
  set wineries(wineries: Winery[]){
    if(wineries==null) { return; }
    this.wineryMapItems = wineries.map( winery =>  {
    let icon = {
            url: 'src/assets/images/map/wine_icon.svg',
            scaledSize: {
              height: 35,
              width: 30
            }
          };
    return new WineryMapItem(winery, icon);
  });
  }

}
