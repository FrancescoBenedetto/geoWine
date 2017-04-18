import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { GMapsService } from '../services/GMapService';
import { Injectable } from '@angular/core';


@Component({
  selector: 'wineries-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [GMapsService]
})


@Injectable()
export class WineriesMapComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private geocoderService: GMapsService) {}

  ngAfterViewInit(): void {
    this.geocoderService.getLatLan("via Aldeno 19")
    .subscribe(value=>console.log(value));
  }

}
