import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDashboardPageRoutingModule } from './user-dashboard-routing.module';

import { UserDashboardPage } from './user-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UserDashboardPageRoutingModule
  ],
  declarations: [UserDashboardPage]
})
export class UserDashboardPageModule {}
