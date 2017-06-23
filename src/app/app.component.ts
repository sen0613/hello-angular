import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";


/*
 * type of javascript variable
 *   1. number
 *   2. string
 *   3. boolean
 *   4. object (array, function)
 *   */

@Component({
  selector: 'my-app'/* <-태그 */,
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';

}


