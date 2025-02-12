import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // If your FoodService still returns static data, this works directly.
  // If using an Observable (from an API), consider using the async pipe.
  foodItems = this.foodService.getAllFoodItems();

  showPopup: boolean = false;

  constructor(
    private foodService: FoodService,
    private cartService: CartService
  ) {}

  addToCart(item: any): void {
    this.cartService.addToCart(item);

    // Show toast notification
    this.showPopup = true;

    // Automatically hide the toast after 3 seconds
    setTimeout(() => {
      this.showPopup = false;
    }, 3000);
  }
}
