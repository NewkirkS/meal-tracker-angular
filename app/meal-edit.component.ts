import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component ({
  selector: "edit-meal",
  template: `
    <div *ngIf="childSelectedMeal">
      <h3>Edit Meal</h3>

        <div class="form-group">
          <label>Edit Name:</label>
          <input class="form-control" [(ngModel)]="childSelectedMeal.name">
        </div>
        <div class="form-group">
          <label>Edit Calories:</label>
          <input class="form-control" [(ngModel)]="childSelectedMeal.calories">
        </div>
        <div class="form-group">
          <label>Edit Details:</label>
          <input class="form-control" [(ngModel)]="childSelectedMeal.details">
        </div>
      
      <button class="btn btn-info" (click)="finishedEditing()">Finish Editing</button>
    </div>
  `
})

export class MealEditComponent {
  @Input() childSelectedMeal: Meal;
  @Output() finishedEditingSender = new EventEmitter();
  finishedEditing() {
    this.finishedEditingSender.emit();
  }
}
