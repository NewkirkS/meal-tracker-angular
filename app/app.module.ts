import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { NewMealComponent } from './new-meal.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    NewMealComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
