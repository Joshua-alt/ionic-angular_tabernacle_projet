import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirephotoPageRoutingModule } from './firephoto-routing.module';

import { FirephotoPage } from './firephoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirephotoPageRoutingModule
  ],
  declarations: [FirephotoPage]
})
export class FirephotoPageModule {}
