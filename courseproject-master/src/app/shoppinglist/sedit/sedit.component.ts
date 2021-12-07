import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';



@Component({
  selector: 'app-sedit',
  templateUrl: './sedit.component.html',
  styleUrls: ['./sedit.component.css']
})
export class SeditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
