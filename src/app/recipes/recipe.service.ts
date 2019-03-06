import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient';


@Injectable()
export class RecipeService {
    recipesChanged = new EventEmitter<Recipe[]> ();
  constructor(private http: Http) { }

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
  getRecipe(id: number) {
      return this.recipes[id];
  }
  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }
  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  // firebase store functions (services)

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
     return this.http.put('', body, {headers: headers});
  }
  fetchData() {
      return this.http.get('') //get from firebase
          .map((response: Response) => response.json())
          .subscribe(
              (data: Recipe[]) => {
                  this.recipes = data;
                  this.recipesChanged.emit(this.recipes);
              }
          );

  }

}
