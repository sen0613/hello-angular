import {Component, OnInit} from "@angular/core";
import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private heroService: HeroService,
             private route: ActivatedRoute,
             private location: Location
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(
      (p: Params) => this.hero = this.heroService.getHero(+p['id'])
    );
  }

  goBack() {
    this.location.back();
  }

}


