import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component ({
  selector: "meal-list",
  template: `
    <div *ngFor="let meal of childMealList">
      <hr>
      <h4>{{meal.name}}</h4>
      <p>Calories: {{meal.calories}}</p>
      <p>Details: {{meal.details}}</p>
      <button (click)="editClicked(currentMeal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() editSender = new EventEmitter();

  editClicked(mealToEdit: Meal) {
    this.editSender.emit(mealToEdit);
  }
}
