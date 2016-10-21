import { Component, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component ({
  selector: "new-meal",
  template: `
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" #newName>
      </div>
      <div class="form-group">
        <label for="calories">Calories:</label>
        <input type="number" #newCalories>
      </div>
      <div class="form-group">
        <label for="details">Name:</label>
        <input type="text" #newDetails>
      </div>
      <button (click)="
        addClicked(newName.value, newCalories.value, newDetails.value);
        newName.value='';
        newCalories.value='';
        newDetails.value='';
      ">Add Meal</button>
    </form>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addMeal(name: string, calories: number, details: string) {
    var newMeal: Meal = new Meal(name, calories, details);
    this.newMealSender.emit(newMeal);
  }
}
