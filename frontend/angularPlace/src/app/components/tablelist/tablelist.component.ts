import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule , PageEvent } from '@angular/material/paginator'


//call app service
import { AppService } from '../../app.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-tablelist',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatPaginatorModule 
  ],
  templateUrl: './tablelist.component.html',
  styleUrl: './tablelist.component.scss'
})
export class TablelistComponent implements OnInit {

  constructor(private service: AppService, private router: Router) { }

  listPlaces: any;
  ngOnInit(): void {
    this.service
      .get_admin_listPlaces()
      .subscribe((response) => {
        this.listPlaces = response
      })
  }

  sendApprovalPlace(place:any){
    this.service
    .patch_admin_approve_place({id: place.id, isApproved: place.isApproved})
    .subscribe((response)=>{
      console.log(response)
    })
  }


  pageSize = 5; // elements in a page
  currentPage = 0; // current page

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
  }

  getDisplayedData() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.listPlaces.metadata.information.slice(startIndex, endIndex);
  }
}
