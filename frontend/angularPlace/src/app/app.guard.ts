import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppGuard implements CanActivate {
  constructor(private router: Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    var login = 'ok';

    if(login=='ok'){
      return true;
    }
    else{
      // chuyển hướng về trang chủ
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
