import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListVideoComponent } from './list-video.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ListVideoComponent],
  exports: [ ListVideoComponent]
})
export class ListVideoComponentModule {

}
