import { Component } from '@angular/core';
import { Meal } from '../../interfaces/meal';
import { MealService } from '../../services/meal.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meal',
  imports: [CommonModule, RouterLink],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css'
})
export class MealComponent {
  meals: Meal[] = [];
  loading = true;

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.getAllMeals().subscribe(response => {
      this.meals = response.meals;
    });
  }
}
