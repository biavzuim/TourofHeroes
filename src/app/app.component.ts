import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'; // Adjust path if needed
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        if (heroes.length > 0) this.selectedHero = heroes[0]; // select first by default
      });
  }

 onSelectById(id: string): void {
  const selectedId = +id; // convert string to number
  this.selectedHero = this.heroes.find(hero => hero.id === selectedId);
}

}
