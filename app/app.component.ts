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
    <meal-list
      [childMealList]="masterMealList"
    ></meal-list>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [];

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

  consoleLog() {
    console.log(this.masterMealList);
  }
}
