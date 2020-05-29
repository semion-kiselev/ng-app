import { Component } from '@angular/core';
import { awsconfig } from '../../../../aws-exports';
import {Amplify} from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-app';

  constructor() {
    Amplify.configure(awsconfig);
  }
}
