import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {AuthGuardService} from './guards/auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'about', loadChildren: () => import('../modules/about/about.module').then(m => m.AboutModule)},
  {
    path: 'kits',
    loadChildren: () => import('../modules/kits/kits.module').then(m => m.KitsModule),
    // canLoad: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
