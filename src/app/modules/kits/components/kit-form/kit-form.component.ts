import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Kit, KitType, ScaleType} from '../../types/kit';

@Component({
  selector: 'app-kit-form',
  templateUrl: './kit-form.component.html',
  styleUrls: ['./kit-form.component.css']
})
export class KitFormComponent implements OnInit {
  @Input() kit?: Kit;
  @Output() formSubmit = new EventEmitter<Kit>();

  constructor(private fb: FormBuilder) { }

  kitTypes = KitType;
  scaleTypes = ScaleType;

  isSubmitted = false;

  kitForm: FormGroup;

  get name() { return this.kitForm.get('name'); }
  get article() { return this.kitForm.get('article'); }

  ngOnInit(): void {
    this.kitForm = this.fb.group({
      article: [this.kit?.article || null, Validators.required],
      name: [this.kit?.name || null, [Validators.required, Validators.minLength(3)]],
      type: [this.kit?.type || KitType.PLASTIC],
      scale: [this.kit?.scale || ScaleType.MIDDLE],
      description: [this.kit?.description || null],
      isActive: [this.kit?.isActive || false],
    }, {
      updateOn: 'submit',
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.kitForm.valid) {
      return;
    }
    this.formSubmit.emit(this.kitForm.value);
  }
}
