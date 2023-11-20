

import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

//call app service
import { AppService } from '../../app.service'


import { GoogleMapsModule } from '@angular/google-maps';


@Component({
  selector: 'app-fullcontent',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    GoogleMapsModule],
  templateUrl: './fullcontent.component.html',
  styleUrl: './fullcontent.component.scss'
})
export class FullcontentComponent {
  constructor(private service: AppService, private router: Router) { }

  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true, // Ẩn UI mặc định của Google Maps
    styles: [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
      },
      // Thêm các styles khác nếu cần
    ],
  };

  center: google.maps.LatLngLiteral = { lat: 10.207008872726027, lng: 103.96421866270437 };
  zoom = 10;
  display: google.maps.LatLngLiteral = this.center;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral = this.center;


  //map-circle
  circleOptions: google.maps.CircleOptions = {
    radius: 20000, // 20km
    center: this.display,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: "#FF0000",
    fillOpacity: 0.15,
  };

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions = event.latLng?.toJSON() as google.maps.LatLngLiteral;
    this.display = event.latLng?.toJSON() as google.maps.LatLngLiteral;
  }

  res: any;

  getNearBy() {
    var dataSend = { location: { lat: this.display.lat, lng: this.display.lng }, type: 'hospital' }

    this.service
      .post_nearby_hospital(dataSend)
      .subscribe((response) => {
        this.res = response
        console.log(this.res)
      })
  }

}



