import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-rlist',
  templateUrl: './rlist.component.html',
  styleUrls: ['./rlist.component.css']
})
export class RlistComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Baked Potatoes', 'Great crunchy potatoes with a bite to them', 'https://cookieandkate.com/images/2020/12/rosemary-roasted-potatoes-recipe-550x824.jpg'),
  new Recipe('Meatlover dish', 'This is a test', 'http://www.mascotkebab.com.au/wp-content/uploads/2014/11/meatlovers.jpg'),
  new Recipe('Grilled chicken', 'This is a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilled-chicken-horizontal-1532030541.jpg?crop=1xw:1xh;center,top&resize=768:*'),
  new Recipe('Salad', 'This is a test', 'https://cdn.loveandlemons.com/wp-content/uploads/2019/07/salad-580x845.jpg')
];
@Output() recipeWasSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}
