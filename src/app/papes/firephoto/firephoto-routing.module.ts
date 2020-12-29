import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirephotoPage } from './firephoto.page';

const routes: Routes = [
  {
    path: '',
    component: FirephotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirephotoPageRoutingModule {}
