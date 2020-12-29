import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaillevideoPageRoutingModule } from './taillevideo-routing.module';

import { TaillevideoPage } from './taillevideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaillevideoPageRoutingModule
  ],
  declarations: [TaillevideoPage]
})
export class TaillevideoPageModule {}
