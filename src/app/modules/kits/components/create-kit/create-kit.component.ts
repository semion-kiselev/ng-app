import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {KitsService} from '../../services/kits.service';
import {Kit} from '../../types/kit';

@Component({
  selector: 'app-create-kit',
  templateUrl: './create-kit.component.html',
  styleUrls: ['./create-kit.component.css']
})
export class CreateKitComponent implements OnInit {

  constructor(private location: Location, private kitsService: KitsService) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

  onSubmit(kit: Kit) {
    this.kitsService.addKit(kit).subscribe(() => this.goBack());
  }
}
