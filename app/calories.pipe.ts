import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform = function(input: Meal[], desiredCalories) {
    var output: Meal[] = [];

  }
}
