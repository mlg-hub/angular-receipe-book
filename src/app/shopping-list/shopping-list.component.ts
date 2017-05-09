import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingService} from "./shopping.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  constructor(private sls: ShoppingService) { }
  ngOnInit() {
    this.items = this.sls.getItems();
    console.log('items call:' + this.items);
  }

}
