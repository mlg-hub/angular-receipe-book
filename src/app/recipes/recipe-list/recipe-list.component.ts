import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];
     @Output() recipeSelected = new EventEmitter<Recipe>();
  // recipe = new Recipe('Dummy', 'Dummy', 'http://www.ldoceonline.com/media/english/illustration/dummy.jpg');
  constructor(private recipeServices: RecipeService ) {
  }
  ngOnInit() {
      this.recipes = this.recipeServices.getRecipes();
      this.recipeServices.recipesChanged.subscribe(
          (recipe: Recipe[]) => this.recipes = recipe
      )
  }
  onSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
    console.log('emitt called');
  }
}
