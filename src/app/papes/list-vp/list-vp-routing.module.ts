import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListVPPage } from './list-vp.page';

const routes: Routes = [
  {
    path: '',
    component: ListVPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListVPPageRoutingModule {}
