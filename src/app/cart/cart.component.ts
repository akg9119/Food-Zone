import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems = this.cartService.getCartItems();
  total = this.cartService.getTotal();

  constructor(private cartService: CartService) { }

  checkout(): void {
    this.cartService.clearCart();
  }
}
