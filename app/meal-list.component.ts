import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component ({
  selector: "meal-list",
  template: `
    <div>
      <select class="form-control" (change)="onChange($event.target.value)">
        <option value="all">Show All</option>
        <option value="high">High-Calorie Meals</option>
        <option value="low">Low-Calorie Meals</option>
      </select>
    </div>
    <div *ngFor="let meal of childMealList | calories:selectedCalories">
      <hr>
      <h4>{{meal.name}}</h4>
      <p>Calories: {{meal.calories}}</p>
      <p>Details: {{meal.details}}</p>
      <button (click)="editClicked(meal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() editSender = new EventEmitter();

  public selectedCalories: string = "all";

  editClicked(mealToEdit: Meal) {
    this.editSender.emit(mealToEdit);
  }

  onChange(option) {
    this.selectedCalories = option;
    console.log(this.selectedCalories);
  }
}
