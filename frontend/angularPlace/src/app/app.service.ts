import { Injectable } from '@angular/core';

import { environment } from '../environment/environment'

// using api
import { HttpClient, HttpHeaders } from '@angular/common/http';

// using observable
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  //Using HttpClient
  constructor(private http: HttpClient) { }

  // define url backend
  url = environment.apiUrl;
  // Setup header  // option = { headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") }; 
  option = { headers: new HttpHeaders().set("Content-Type", "application/json") };


  //GET
  get_admin_listPlaces(){
    return this.http.get( this.url + '/admin/listPlaces' )
  }


  //POST
  post_nearby_hospital(data: any) {
    return this.http.post(this.url + '/nearby/hospital', data, this.option)
  }

  //PATCH
  patch_admin_approve_place(data:any){
    return this.http.patch(this.url + '/admin/approvePlace', data, this.option)
  }

  get_observable_nearby_hospital_data<T>(): Observable<T> {
    return this.http.get(this.url + '/nearby/hospital').pipe(map((data: any) => data))
  }

  //   get_aside_data(){
  //     return this.http.get( this.url + 'categories/aside' )
  //   }

  //   get_single_list_categories(slug:any){
  //     return this.http.get( this.url + 'categories/single_list/' + slug )
  //   }






  // post_contact(data:any){
  //     var body = new URLSearchParams()

  //     body.set('name', data.name);
  //     body.set('email', data.email);
  //     body.set('phone', data.phone);
  //     body.set('address', data.address);

  //     return this.http.post( this.url + 'contacts/add', body, this.option )
  //   }

  //   post_login(data:any){
  //     var body = new URLSearchParams()

  //     body.set('username', data.username);
  //     body.set('password', data.password);

  //     return this.http.post( this.url + 'users/login', body, this.option )
  //   }

  get_observable_data<T>(): Observable<T> {
    return this.http.get(this.url + 'products/list').pipe(map((data: any) => data))
  }

}