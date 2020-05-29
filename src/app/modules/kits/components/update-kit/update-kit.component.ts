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
      const article = params.get('article');
      this.kitsService.getKitById(article).subscribe({
        next: (kit: Kit) => this.kit = kit,
        complete: () => this.kitIsLoading = false,
      });
    });
  }

  goBack() {
    this.location.back();
  }

  onSubmit(kit: Kit) {
    this.kitsService.updateKit(kit).subscribe(() => this.goBack());
  }
}
