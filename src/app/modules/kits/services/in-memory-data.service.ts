import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Kit, KitType, ScaleType } from '../types/kit';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const kits = [
      {
        id: 1,
        article: '001',
        type: KitType.PLASTIC,
        scale: ScaleType.MIDDLE,
        name: 'Kit001',
        description: 'Kit001 description',
        isActive: true,
      },
      {
        id: 2,
        article: '002',
        type: KitType.PLASTIC,
        scale: ScaleType.MIDDLE,
        name: 'Kit002',
        description: 'Kit002 description',
        isActive: true,
      }
    ];

    return { kits };
  }

  genId(kits: Kit[]): number {
    return kits.length > 0 ? Math.max(...kits.map(hero => hero.id)) + 1 : 1;
  }
}
