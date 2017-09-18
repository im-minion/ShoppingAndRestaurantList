import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('TestName', 'TestDesc', 'http://www.foodtolove.co.nz/assets/images/badge-collection.png'),
    new Recipe('TestName', 'TestDesc', 'http://www.foodtolove.co.nz/assets/images/badge-collection.png')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
