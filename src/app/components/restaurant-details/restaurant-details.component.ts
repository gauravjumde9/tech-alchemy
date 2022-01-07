import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss'],
})
export class RestaurantDetailsComponent implements OnInit {
  public result: any;
  public menuItem: any = [];
  public res: any;
  menus: string[] = [
    'Home',
    'Orders',
    'Notification',
    'Help & Support',
    'Settings',
  ];
  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.res = params.get('restaurantName');
    });
    this.restaurantDetails(this.res);
    this.menu(this.res);
  }

  restaurantDetails(res) {
    this.restaurantService.restaurantDetails().subscribe((data: any) => {
      for (let i = 0; i < data.restaurantDetails.length; i++) {
        if (data.restaurantDetails[i].restaurantName === res) {
          this.result = data.restaurantDetails[i];
        }
      }
    });
  }

  menu(res) {
    this.restaurantService.menu().subscribe((data: any) => {
      for (let i = 0; i < data.menu.length; i++) {
        if (data.menu[i].restaurantName.includes(res)) {
          this.menuItem.push(data.menu[i]);
        }
      }
    });
  }
}
