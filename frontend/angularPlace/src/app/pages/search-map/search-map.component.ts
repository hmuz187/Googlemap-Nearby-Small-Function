import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, PageEvent} from '@angular/material/paginator';

//call app service
import { AppService } from '../../app.service'


import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-search-map',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatPaginatorModule,
    NgFor,
    NgIf,
    GoogleMapsModule,
    HeaderComponent,
  ],
  templateUrl: './search-map.component.html',
  styleUrl: './search-map.component.scss'
})
export class SearchMapComponent {
  constructor(private service: AppService, private router: Router) { }


  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true, // Hide default UI of Google Maps
    styles: [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
      },
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

  res: any = {}; // results data places
  selectedType: string = 'hospital';
  lastSelectedType = this.selectedType;

  onTypeChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedType = value;
  }

  getNearBy() {
    var dataSend = { location: { lat: this.display.lat, lng: this.display.lng }, type: this.selectedType }
    this.lastSelectedType = this.selectedType

    // console.log(dataSend)

    this.service
      .post_nearby_hospital(dataSend)
      .subscribe((response) => {
        this.res = response
        console.log(this.res)
      })
  }

  iconUrls: { [key: string]: string } = {
    hospital: '../../../assets/icon/hospital.png',
    school: '../../../assets/icon/education.png',
    park: '../../../assets/icon/park.png',
    supermarket: '../../../assets/icon/supermarket.png',
  };

  getIconUrl(type: string): string {
    return this.iconUrls[type] || ''; // return URL icon of type place
  }


  pageSize = 6; // elements in each page
  currentPage = 0; // current page
  paginatedResults: any[] = []; // data of current page

  // ...

  //event change page
  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
  }

  getDisplayedData() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.res.metadata.information.slice(startIndex, endIndex);
  }

}