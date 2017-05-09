
import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  constructor() { }

  private  recipes: Recipe [] = [
    new Recipe('Dummy1', 'Dummy', 'http://www.ldoceonline.com/media/english/illustration/dummy.jpg',[
        new Ingredient('mayayi', 2),
        new Ingredient('matungulu', 5)
    ]),
    new Recipe('Dummy2', 'Dummy', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',[
      new Ingredient('sombe', 2),
      new Ingredient('Kasuku', 5)
    ]),
    new Recipe('Makaroni', 'Dummy', 'http://www.taste.com.au/images/recipes/sfi/2014/06/slowcooker-beef-ragu-30218_l.jpeg',[])
  ];

  getRecipes() {
    return this.recipes;
  }


}
