import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacebPageRoutingModule } from './faceb-routing.module';

import { FacebPage } from './faceb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacebPageRoutingModule
  ],
  declarations: [FacebPage]
})
export class FacebPageModule {}
