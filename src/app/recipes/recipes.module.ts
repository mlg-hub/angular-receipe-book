import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {recipesRouting} from "./recipe-routing";
import {RecipesComponent} from "./recipes.component";
@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports:[
        recipesRouting,
        CommonModule,
        ReactiveFormsModule
    ]
})

export class RecipeModule{}