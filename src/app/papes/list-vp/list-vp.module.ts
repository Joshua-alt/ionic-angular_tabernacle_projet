import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListVPPageRoutingModule } from './list-vp-routing.module';

import { ListVPPage } from './list-vp.page';
import { ListVideoComponentModule } from '../list-video/list-video.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListVPPageRoutingModule,
    ListVideoComponentModule
  ],
  declarations: [ListVPPage]
})
export class ListVPPageModule {}
