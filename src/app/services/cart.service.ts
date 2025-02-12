import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../cart-item';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  private cart = new BehaviorSubject<CartItem[]>([]);
  
  cart$ = this.cart.asObservable();

  addToCart(foodItem: any): void {
    const existingItem = this.cartItems.find(item => item.id === foodItem.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...foodItem, quantity: 1 });
    }
    this.cart.next(this.cartItems);
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
    this.cart.next(this.cartItems);
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}
