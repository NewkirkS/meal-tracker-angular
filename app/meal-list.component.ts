import { Component, Input } from "@angular/core";
import { Meal } from "./meal.model";

@Component ({
  selector: "meal-list",
  template: `
    <div *ngFor="let meal of childMealList">
      <hr>
      <h4>{{meal.name}}</h4>
      <p>Calories: {{meal.calories}}</p>
      <p>Details: {{meal.details}}</p>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}
