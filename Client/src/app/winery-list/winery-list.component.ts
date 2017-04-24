import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Winery } from '../model/winery';
import { WineryService } from '../services/winery-service';

@Component({
  selector: 'winery-list',
  templateUrl: './winery-list.component.html',
  styleUrls: ['./winery-list.component.css']
})

export class WineryListComponent implements OnInit {

  wineries: Winery[];

  constructor(private wineryService: WineryService) {}

  // @Input('wineries') wineries: Winery[];

  getWineries(): void {
    this.wineryService
        .getWineries()
        .then(wineries => this.wineries = wineries);
  }

  ngOnInit(): void {
    this.getWineries();
  }

}
