import { Component } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'wineries-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class WineriesMapComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
}
