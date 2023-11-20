import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-basicmap',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    GoogleMapsModule],
  templateUrl: './basicmap.component.html',
  styleUrl: './basicmap.component.scss'
})
export class BasicmapComponent {

  center: google.maps.LatLngLiteral = { lat: 10.207008872726027, lng: 103.96421866270437 };
  zoom = 10;
  display: google.maps.LatLngLiteral = this.center;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral = this.center;

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions = event.latLng?.toJSON() as google.maps.LatLngLiteral;
    this.display = event.latLng?.toJSON() as google.maps.LatLngLiteral;
  }


}
