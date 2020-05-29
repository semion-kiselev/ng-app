import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KitsService } from '../../services/kits.service';
import {Kit, ScaleType, KitType} from '../../types/kit';

@Component({
  selector: 'app-kits-list',
  templateUrl: './kits-list.component.html',
  styleUrls: ['./kits-list.component.css']
})
export class KitsListComponent implements OnInit {

  constructor(private router: Router, private kitsService: KitsService) { }

  kitsAreLoading: boolean;
  kits: Kit[];
  scaleTypes = ScaleType;
  kitTypes = KitType;

  ngOnInit(): void {
      this.fetchKits();
  }

  fetchKits() {
    this.kitsAreLoading = true;
    this.kitsService.getKits().subscribe({
      next: (kits: Kit[]) => this.kits = kits,
      complete: () => this.kitsAreLoading = false,
    });
  }

  viewKit(article: string) {
    this.router.navigate([`/kits/${article}`]);
  }

  updateKit(article: string) {
    this.router.navigate([`/kits/${article}/update`]);
  }

  removeKit(article: string) {
    this.kitsService.removeKit(article).subscribe(() => this.fetchKits());
  }
}
