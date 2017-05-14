import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Recipe} from "../recipe";
import {ShoppingService} from "../../shopping-list/shopping.service";
import {Subscription} from "rxjs/Subscription";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription: Subscription;
  constructor(private sls: ShoppingService,
              private router: Router,
              private route: ActivatedRoute,
              private recipesService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          this.recipeIndex = params['id'];
          this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
        }
    );

  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  onAddToShopList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
  onEdit(){
      this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }
  onDelete(){
    this.router.navigate(['/recipes']);
    this.recipesService.deleteRecipe(this.selectedRecipe);
  }

}
