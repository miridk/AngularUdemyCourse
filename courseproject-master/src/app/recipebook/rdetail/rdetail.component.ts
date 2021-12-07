import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-rdetail',
  templateUrl: './rdetail.component.html',
  styleUrls: ['./rdetail.component.css']
})
export class RdetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
