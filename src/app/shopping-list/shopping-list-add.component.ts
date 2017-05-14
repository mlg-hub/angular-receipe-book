import { Component, OnInit, Input, OnChanges,Output,EventEmitter } from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingService} from "./shopping.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  isAdd = true;
  @Input() item:Ingredient;
    @Output() cleared = new EventEmitter();
  constructor(private sls: ShoppingService) { }

  ngOnInit() {
  }
    ngOnChanges(changes){
        if(changes.item.currentValue === null){
            this.isAdd = true;
            this.item = {nameI: null, amountI: null };
        }else{
            this.isAdd = false;
        }
    }
  onSubmit(ingredient: Ingredient){
      if(!this.isAdd) {
          this.sls.editItem(this.item,new Ingredient(ingredient.nameI, ingredient.amountI ));
          this.onClear();
      }else{
        this.item = new Ingredient(ingredient.nameI, ingredient.amountI);
        this.sls.addItem(this.item);
      }
  }
    onDelete(){
        this.sls.deleteItem(this.item);
        this.onClear();
    }
    onClear(){
        this.isAdd = true;
        this.cleared.emit(null);
    }

}
