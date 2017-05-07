import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Winery } from '../model/winery';
import { WineryService } from '../services/winery-service';

@Component({
  selector: 'winery-list',
  templateUrl: './winery-list.component.html',
  styleUrls: ['./winery-list.component.css']
})

export class WineryListComponent implements OnInit {

  wineries: Winery[] = [];
  @Output() mouseOveredWineryEvent = new EventEmitter<number>();
  @Output() mouseOutWineryEvent = new EventEmitter<number>();

  constructor(private wineryService: WineryService) {}

  // @Input('wineries') wineries: Winery[];

  getWineries(): void {
    this.wineryService
        .getTopTenWineries()
        .then(wineries => {
          this.wineries = wineries;
          // this.wineriesChanged.emit(wineries);
        });
  }

  ngOnInit(): void {
    this.getWineries();
  }

  mouseOverWinery(wineryId: number): void {
    this.mouseOveredWineryEvent.emit(wineryId);
  }

  mouseOutWinery(wineryId: number): void {
    this.mouseOutWineryEvent.emit(wineryId);
  }

  mapIdle(latLngBounds: any){
    this.wineryService
      .getWineriesIn(latLngBounds)
      .then(wineries => this.wineries = wineries);
  }



}
