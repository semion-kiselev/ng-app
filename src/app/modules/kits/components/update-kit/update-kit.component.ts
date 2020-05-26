import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {KitsService} from '../../services/kits.service';
import {Kit} from '../../types/kit';

@Component({
  selector: 'app-update-kit',
  templateUrl: './update-kit.component.html',
  styleUrls: ['./update-kit.component.css']
})
export class UpdateKitComponent implements OnInit {

  constructor(private location: Location, private kitsService: KitsService, private route: ActivatedRoute) { }

  kitIsLoading = false;
  kit: Kit;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.kitIsLoading = true;
      const id = Number(params.get('id'));
      this.kitsService.getKitById(id).subscribe({
        next: (kit: Kit) => this.kit = kit,
        complete: () => this.kitIsLoading = false,
      });
    });
  }

  goBack() {
    this.location.back();
  }

  onSubmit(kit: Kit) {
    const kitToUpdate = {
      id: this.kit.id,
      ...kit
    };
    this.kitsService.updateKit(kitToUpdate).subscribe(() => this.goBack());
  }
}
