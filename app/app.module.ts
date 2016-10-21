import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { NewMealComponent } from './new-meal.component';
import { MealListComponent } from './meal-list.component';
import { MealEditComponent } from './meal-edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    NewMealComponent,
    MealListComponent,
    MealEditComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
