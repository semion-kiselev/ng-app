import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitsListComponent } from './components/kits-list/kits-list.component';
import { KitComponent } from './components/kit/kit.component';
import { CreateKitComponent } from './components/create-kit/create-kit.component';
import { UpdateKitComponent } from './components/update-kit/update-kit.component';
import {AuthGuardService} from '../../core/guards/auth-guard.service';

// canActivate: [AuthGuardService]
const routes: Routes = [
  { path: '', component: KitsListComponent },
  { path: 'create', component: CreateKitComponent },
  { path: ':article/update', component: UpdateKitComponent },
  { path: ':article', component: KitComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitsRoutingModule { }
