import { Component, OnInit } from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private rsv: RecipeService) { }

  onStore() {
    this.rsv.storeData().subscribe(
        data => console.log(data),
        error => console.log(error)
    )
  }
  onFetch() {
    this.rsv.fetchData();
  }
}
