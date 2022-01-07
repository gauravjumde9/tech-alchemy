import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.scss'],
})
export class AllRestaurantsComponent implements OnInit {
  public result: any;
  public category = ['Baked', 'Sweet', 'Hot Dish', 'Fast Food', 'Salads'];
  menus: string[] = [
    'Home',
    'Orders',
    'Notification',
    'Help & Support',
    'Settings',
  ];
  constructor(
    public restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.allRestaurants();
  }

  allRestaurants() {
    this.restaurantService.allRestaurants().subscribe((data: any) => {
      this.result = data.allRestaurants;
    });
  }

  fnCategory(cat) {
    console.log(cat);
  }

  details(selected) {
    this.router.navigate(['details', selected]);
  }
}
