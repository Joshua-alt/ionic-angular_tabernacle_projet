import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ListPhotoinstComponent } from './list-photoinst.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ListPhotoinstComponent],
  exports: [ ListPhotoinstComponent]
})
export class ListPhotoinstComponentModule {

}
