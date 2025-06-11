import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private API_URL_BASE = 'https://www.themealdb.com/api/json/v1/1/';

  constructor(private httpClient: HttpClient) {}

  getAllMeals(): Observable<{ meals: Meal[] }> {
    return this.httpClient.get<{ meals: Meal[] }>(`${this.API_URL_BASE}search.php?s=`);
  }

  getMealById(id: string): Observable<{ meals: Meal[] }> {
    return this.httpClient.get<{ meals: Meal[] }>(`${this.API_URL_BASE}lookup.php?i=${id}`);
  }
}
