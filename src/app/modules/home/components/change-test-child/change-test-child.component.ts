import {Component, Input, OnInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-change-test-child',
  templateUrl: './change-test-child.component.html',
  styleUrls: ['./change-test-child.component.css']
})
export class ChangeTestChildComponent implements OnInit, AfterViewChecked {
  @Input() prop: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    console.log('change test Child view checked');
  }

}
