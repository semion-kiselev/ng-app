import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitsRoutingModule } from './kits-routing.module';
import { KitsListComponent } from './components/kits-list/kits-list.component';
import { KitComponent } from './components/kit/kit.component';
import { CreateKitComponent } from './components/create-kit/create-kit.component';
import { UpdateKitComponent } from './components/update-kit/update-kit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { KitFormComponent } from './components/kit-form/kit-form.component';


@NgModule({
  declarations: [KitsListComponent, KitComponent, CreateKitComponent, UpdateKitComponent, KitFormComponent],
  imports: [
      CommonModule,
      KitsRoutingModule,
      ReactiveFormsModule
  ],
})
export class KitsModule { }
