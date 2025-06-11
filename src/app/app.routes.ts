import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MealComponent } from './pages/meal/meal.component';
import { MealDetailComponent } from './pages/meal-detail/meal-detail.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'platos', component: MealComponent },
    { path: 'platos/:id', component: MealDetailComponent }
];
