import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';
import {ShoppingService} from "./shopping-list/shopping.service";
import {routing } from "./app.routing";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {RecipeService} from "./recipes/recipe.service";
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ShoppingListModule,
    routing
  ],
  providers: [ShoppingService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
