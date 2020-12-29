import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [ 
{path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: () => import('./papes/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./papes/admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
   
  },
  {
    path: 'user-dashboard',
    loadChildren: () => import('./papes/user-dashboard/user-dashboard.module').then( m => m.UserDashboardPageModule)
   
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    // , canActivate: [AuthGuard],
    // data: {
    //   role: false
    // }
  },
  {
    path: 'list-vp',
    loadChildren: () => import('./papes/list-vp/list-vp.module').then( m => m.ListVPPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./papes/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'firephoto',
    loadChildren: () => import('./papes/firephoto/firephoto.module').then( m => m.FirephotoPageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'forgetpw',
    loadChildren: () => import('./forgetpw/forgetpw.module').then( m => m.ForgetpwPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
