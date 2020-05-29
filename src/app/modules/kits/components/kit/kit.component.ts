import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';
import {KitsService} from '../../services/kits.service';
import {Kit} from '../../types/kit';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.css']
})
export class KitComponent implements OnInit {

  constructor(private location: Location, private route: ActivatedRoute, private kitsService: KitsService) { }

  kitIsLoading = false;
  kit: Kit;

  ngOnInit() {
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
}
