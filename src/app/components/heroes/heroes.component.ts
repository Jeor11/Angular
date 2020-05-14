import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  // objeto que contiene el arreglo del servicio heroesService
  heroes: Heroe [] = [];
  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log (this.heroes);
  }

  verHeroe( idx: number){
  this.router.navigate(['/heroe', idx]);
   // console.log(idx);
  }

}
