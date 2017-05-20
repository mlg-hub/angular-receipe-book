import { Component, OnInit, OnDestroy } from '@angular/core';
import {RecipeService} from "../recipe.service";
import { ActivatedRoute,Router } from "@angular/router";
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
              private formBuilder: FormBuilder,
              private router: Router) { }

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
    private navigateBack(){
        this.router.navigate(['../']);
    }

    onSubmit(){
        const newRecipe = this.recipeForm.value;
        if(this.isNew){
            this.recipeService.addRecipe(newRecipe);
        }else{
            this.recipeService.editRecipe(this.recipe, newRecipe);
        }
        //console.log(newRecipe.ingredients);
        this.navigateBack();
    }
    onAddItem(name: string, amount: number){
        (<FormArray>this.recipeForm.controls['ingredients']).push(
            new FormGroup({
                nameI: new FormControl(name, Validators.required),
                amountI:new FormControl(amount, [
                    Validators.required,
                    Validators.pattern("\\d+")
                ])
            })
        )
    }
    onRemoveItem(index: number){
        (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
    }
    onCancel() {
        this.navigateBack();
    }

  private initForm(){
    let recipeName= '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!this.isNew){
        if(this.recipe.hasOwnProperty('ingredients')){
            for( let i = 0; i < this.recipe.ingredients.length; i++){
                recipeIngredients.push(
                    new FormGroup({
                        nameI: new FormControl(this.recipe.ingredients[i].nameI, Validators.required),
                        amountI:new FormControl(this.recipe.ingredients[i].amountI, [
                            Validators.required,
                            Validators.pattern("\\d+")
                        ])
                    })
                )
            }
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
