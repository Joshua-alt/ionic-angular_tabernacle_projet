
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  auth: any;
  alertCtrl: any;
  constructor(private router: Router, alertCtrl: AlertController, auth: AuthService){}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const expected = next.data.role;
    
      console.log(expected);
      return  this.auth.stat().subscribe(userProfileSnapshot => {
        let role = userProfileSnapshot.data().isAdmin;
     
        console.log('log', role);
        if (role) {
          //to specifie user role
          if (expected === role) {
            return true;
          } else {
            this.showAlert();
            return this.router.parseUrl('/login'); 
          }
          return true;
        } else {
          this.showAlert();
          return this.router.parseUrl('/login'); 
        }
      });

  }
  async showAlert(){
    let alert = await this.alertCtrl.create({
      header: 'Unauthorized',
      message:'You are not login to vist that page',
      button: ['ok']
    });
    alert.preset();
  }
  
}
