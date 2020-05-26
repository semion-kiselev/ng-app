import {ChangeDetectionStrategy, Component, OnInit, OnChanges, Input, AfterViewChecked} from '@angular/core';
import {SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-change-test',
  templateUrl: './change-test.component.html',
  styleUrls: ['./change-test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeTestComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() value: {prop: string};

  constructor() { }

  title = 'First';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {

  }

  ngAfterViewChecked() {
    console.log('change test view checked');
    this.title = 'Second';
  }

}
