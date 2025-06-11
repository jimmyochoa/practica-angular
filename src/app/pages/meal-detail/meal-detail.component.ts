import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../../interfaces/meal';
import { MealService } from '../../services/meal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-detail',
  imports: [CommonModule],
  templateUrl: './meal-detail.component.html',
  styleUrl: './meal-detail.component.css'
})
export class MealDetailComponent {
meal?: Meal;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mealService.getMealById(id).subscribe(response => {
        this.meal = response.meals[0];
      });
    }
  }
}
