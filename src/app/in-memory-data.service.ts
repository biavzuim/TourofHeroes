import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', power: 'Healing'},
      { id: 13, name: 'Bombasto',power: 'Healing'},
      { id: 14, name: 'Celeritas', power: 'Healing' },
      { id: 15, name: 'Magneta', power: 'Healing'},
      { id: 16, name: 'RubberMan', power: 'Healing' },
      { id: 17, name: 'Dynama', power: 'Healing' },
      { id: 18, name: 'Dr. IQ',  power: 'Healing'},
      { id: 19, name: 'Magma', power: 'Healing' },
      { id: 20, name: 'Tornado', power: 'Healing'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}