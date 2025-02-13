import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartCount = 0;
  showLogout =true
  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cart$.subscribe(items => {
      this.cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showLogout = !(event.url === '/login' || event.url === '/register');
      }
    });
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
