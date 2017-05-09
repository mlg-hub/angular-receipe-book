import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
const recipeRoute : Routes = [

    {path:'recipes',
        component: RecipesComponent,
            children:[
                {path:'', component:RecipeStartComponent},
                {path:'new', component:RecipeEditComponent},
                {path:':id', component:RecipeDetailComponent},
                {path:':id/edit', component:RecipeEditComponent}
            ]
    },
    {path: '', redirectTo:'/recipes', pathMatch:'full'}
];
@NgModule({
    imports: [
        RouterModule.forChild(recipeRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class recipeRoutingModule { }