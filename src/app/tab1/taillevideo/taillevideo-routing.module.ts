import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaillevideoPage } from './taillevideo.page';

const routes: Routes = [
  {
    path: '',
    component: TaillevideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaillevideoPageRoutingModule {}
