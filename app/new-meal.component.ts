import { Component, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component ({
  selector: "new-meal",
  template: `
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input class="form-control" type="text" #newName>
      </div>
      <div class="form-group">
        <label for="calories">Calories:</label>
        <input class="form-control" type="number" #newCalories>
      </div>
      <div class="form-group">
        <label for="details">Details:</label>
        <input class="form-control" type="text" #newDetails>
      </div>
    </form>
    <button class="btn btn-success" (click)="
      addClicked(newName.value, newCalories.value, newDetails.value);
      newName.value='';
      newCalories.value=null;
      newDetails.value='';
    ">Add Meal</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, calories: number, details: string) {
    var newMeal: Meal = new Meal(name, calories, details);
    this.newMealSender.emit(newMeal);
  }
}
