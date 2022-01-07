import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRestaurantsComponent } from './components/all-restaurants/all-restaurants.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';

const routes: Routes = [
  { path: 'home', component: AllRestaurantsComponent, pathMatch: 'full' },
  { path: 'details', component: RestaurantDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
