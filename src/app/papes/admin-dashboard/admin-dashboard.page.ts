import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  constructor(private ServAuth: AuthService,public router: Router,) { }
  slidesOptions = {
     slidesPerView: 1.5,
   };
  ngOnInit() {
  
  }

  quite(){
    this.ServAuth.logout();
    this.router.navigateByUrl('/tabs/tab1');
         
        
  }
}
