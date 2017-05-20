import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DropdownDirective } from './dropdown.directive';
import {ShoppingService} from "./shopping-list/shopping.service";
import {routing } from "./app.routing";
import {recipeRoutingModule} from "./recipes/recipe-route.modules";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {RecipeService} from "./recipes/recipe.service";
import {RecipeModule} from "./recipes/recipes.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ShoppingListModule,
      RecipeModule,
    recipeRoutingModule,
    routing
    
  ],
  providers: [ShoppingService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
