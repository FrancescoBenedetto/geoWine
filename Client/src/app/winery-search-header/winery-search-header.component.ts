import { Component, NgZone, OnInit, Output, ViewChild, EventEmitter, ElementRef, Input } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { LatLng } from '../model/latlng';



@Component({
  selector: 'winery-search-header',
  templateUrl: './winery-search-header.component.html',
  styleUrls: ['./winery-search-header.component.css']
})


export class WinerySearchHeaderComponent implements OnInit {

  @Output() placeChanged = new EventEmitter<LatLng>();

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

//ADD DEBOUNCER AND DISTINCT
  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['(regions)']
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          let latLng: LatLng = new LatLng(place.geometry.location.lat(), place.geometry.location.lng());
          this.placeChanged.emit(latLng);
        });
      });
    });
  }



}
