import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component ({
  selector: "edit-meal",
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Edit Name:</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div>
        <label>Edit Calories:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
      </div>
      <div>
        <label>Edit Details:</label>
        <input [(ngModel)]="childSelectedMeal.details">
        <button (click)="finishedEditing()">Finish Editing</button>
      </div>
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
