import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { formArrayNameProvider } from '../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_name';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList = [];
  displayForm = 'display-none';
  displayButton = '';
  todayList = []
  todaysCalories: number = 0

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

  addFoodForm() {
    this.displayForm = '';
    this.displayButton = 'display-none';
  }

  addFood(food) {
    console.log(`food: ${food}`)
    this.foodList.push(food.value);

    this.displayForm = 'display-none';
    this.displayButton = '';
  }

  addTodayFood(food) {
    console.log(`foodz: ${food}`)
    for (let i = 1; i <= food.value.quantity; i++) {
      this.todayList.push(food);
      this.todaysCalories += food.calories

    }
    console.log(`today's list: ${this.todayList}`)

  }

}
