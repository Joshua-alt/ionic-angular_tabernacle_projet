import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacebPage } from './faceb.page';

const routes: Routes = [
  {
    path: '',
    component: FacebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacebPageRoutingModule {}
