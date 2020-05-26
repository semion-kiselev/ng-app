import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ChangeTestComponent } from './components/change-test/change-test.component';
import { ChangeTestChildComponent } from './components/change-test-child/change-test-child.component';

@NgModule({
  declarations: [HomeComponent, ChangeTestComponent, ChangeTestChildComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
