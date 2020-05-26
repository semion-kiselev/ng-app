import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  value = {prop: 'a'};

  changeValue() {
    this.value.prop = 'b';
    // this.value = {...this.value, prop: 'b'};
  }
}
