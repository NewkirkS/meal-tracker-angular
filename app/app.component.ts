import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <header>
    <h1>Meal Tracker</h1>
    </header>

    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6" id="new-meal-div">
        <new-meal
          (newMealSender)="addMeal($event)"
        ></new-meal>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6" id="edit-meal-div">
        <edit-meal
            [childSelectedMeal]="masterSelectedMeal"
            (finishedEditingSender)="finishedEditing()"
          ></edit-meal>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6" id="list-meal-div">
        <meal-list
          [childMealList]="masterMealList"
          (editSender)="showEdit($event)"
        ></meal-list>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Breakfast", 100, "2 Eggs"),
    new Meal("Lunch", 300, "Mac and Cheese"),
    new Meal("Dinner", 600, "Stir Fry")
  ];

  public masterSelectedMeal: Meal = null;

  showEdit(clickedMeal: Meal) {
    this.masterSelectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.masterSelectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

}
