import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl:'./heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes;
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {
  } //생성자

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  goToDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
