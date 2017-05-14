import { Component, OnInit, OnDestroy } from '@angular/core';
import {RecipeService} from "../recipe.service";
import { ActivatedRoute } from "@angular/router";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private subscription: Subscription;
  private recipeIndex: number;
  private isNew = true;
  private recipe: Recipe;
  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          if (params.hasOwnProperty('id')) {
            this.isNew = false;
            this.recipeIndex = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.recipeIndex);
          }else{
            this.isNew = true;
            this.recipe = null;
          }
          console.log(this.isNew);
          this.initForm();
        }
    );

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private initForm(){
    let recipeName= '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!this.isNew){
        for( let i = 0; i < this.recipe.ingredients.length; i++){
          recipeIngredients.push(
              new FormGroup({
                name: new FormControl(this.recipe.ingredients[i].nameI, Validators.required),
                amount:new FormControl(this.recipe.ingredients[i].amountI, [
                  Validators.required,
                  Validators.pattern("\\d+")
                ])
              })
          )
        }
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;

    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
  }

}
