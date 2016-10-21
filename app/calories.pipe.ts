import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform = function(input: Meal[], desiredCalories) {
    var output: Meal[] = [];
    if (desiredCalories === "low") {
      input.forEach(function(meal){
        if (meal.calories < 500) {
            output.push(meal);
        }
      });
    } else if (desiredCalories === "high") {
      input.forEach(function(meal){
        if (meal.calories > 500) {
            output.push(meal);
        }
      });
    } else {
      return input;
    }
    return output;
  }
}
