import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-ritem',
  templateUrl: './ritem.component.html',
  styleUrls: ['./ritem.component.css']
})
export class RitemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipeSelected.emit();
  }


}
