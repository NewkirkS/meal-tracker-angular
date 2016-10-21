import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
    <button (click)="consoleLog()">Console</button>
    <edit-meal
        [childSelectedMeal]="masterSelectedMeal"
        (finishedEditingSender)="finishedEditing()"
      ></edit-meal>
    <meal-list
      [childMealList]="masterMealList"
      (editSender)="showEdit($event)"
    ></meal-list>
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

  consoleLog() {
    console.log(this.masterSelectedMeal);
  }
}
