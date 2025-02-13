import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foodItems = this.foodService.getAllFoodItems();

  showPopup: boolean = false;

  constructor(
    private foodService: FoodService,
    private cartService: CartService
  ) {}

  addToCart(item: any): void {
    this.cartService.addToCart(item);

    this.showPopup = true;

    setTimeout(() => {
      this.showPopup = false;
    }, 3000);
  }
}
