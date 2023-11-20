import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule} from '@angular/google-maps';
// import { google } from 'google-maps';


@Component({
  selector: 'app-googlemap',
  standalone: true,
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  templateUrl: './googlemap.component.html',
  styleUrl: './googlemap.component.scss'
})


export class GooglemapComponent {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng?.toJSON() as google.maps.LatLngLiteral);
    this.display = event.latLng?.toJSON() as google.maps.LatLngLiteral;
  }








  
  ngOnInit(): void {

    // this.service
    //   .get_observable_data()
    //   .subscribe({
    //     next(value) { console.log(value) },
    //     error(err) { console.log(err) },
    //     complete() { console.log('Finish') }
    //   })

  }




}


// export class GooglemapComponent {

//   center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
//   zoom = 4;
//   display: google.maps.LatLngLiteral = { lat: 0, lng: 0 };

//   moveMap(event: google.maps.MapMouseEvent) {
//     this.center = event.latLng?.toJSON() as google.maps.LatLngLiteral; 
//   }

//   move(event: google.maps.MapMouseEvent) {
//     this.display = event.latLng?.toJSON() as google.maps.LatLngLiteral;
//   }

// }
