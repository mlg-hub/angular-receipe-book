import { Routes,RouterModule } from '@angular/router';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

const APP_ROUTE: Routes = [
    {path:'shopping-list', component:ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTE);