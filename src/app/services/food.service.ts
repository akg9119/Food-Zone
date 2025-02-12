import { Injectable } from '@angular/core';
import { FoodItem } from '../food-item';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  // include other relevant fields as needed
}

@Injectable({
  providedIn: 'root'
})

export class FoodService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

 // services/food.service.ts
 private foodItems: FoodItem[] = [
  { 
    id: 1,
    name: 'Classic Burger',
    price: 8.99,
    image: 'https://via.placeholder.com/300x200.png?text=Burger+Image',
    description: 'Juicy beef patty with fresh vegetables'
  },
  { 
    id: 2,
    name: 'Pepperoni Pizza',
    price: 12.99,
    image: 'https://picsum.photos/id/165/300/200', // Pizza image
    description: 'Traditional Italian pizza with extra cheese'
  },
  { 
    id: 3,
    name: 'Fresh Fries',
    price: 4.99,
    image: 'https://picsum.photos/id/160/300/200', // Fries image
    description: 'Crispy golden potato fries'
  },
  { 
    id: 4,
    name: 'Garden Salad',
    price: 7.99,
    image: 'https://picsum.photos/id/292/300/200', // Salad image
    description: 'Fresh seasonal vegetables with dressing'
  },
  { 
    id: 5,
    name: 'Classic Burger',
    price: 9.99,
    image: 'https://via.placeholder.com/300x200.png?text=Burger+Image',
    description: 'Juicy beef patty with fresh vegetables'
  },
  { 
    id: 6,
    name: 'Pepperoni Pizza',
    price: 100.99,
    image: 'https://picsum.photos/id/165/300/200', // Pizza image
    description: 'Traditional Italian pizza with extra cheese'
  },
  { 
    id: 7,
    name: 'Fresh Fries',
    price: 6.99,
    image: 'https://picsum.photos/id/160/300/200', // Fries image
    description: 'Crispy golden potato fries'
  },
  { 
    id: 8,
    name: 'Garden Salad',
    price: 1.99,
    image: 'https://picsum.photos/id/292/300/200', // Salad image
    description: 'Fresh seasonal vegetables with dressing'
  }
];
  constructor(private http: HttpClient) { }
  getAllFoodItems(): FoodItem[] {
    return this.foodItems;
  }
  // getAllFoodItems(): Observable<Meal[]> {
  //   return this.http .get<{ meals: Meal[] }>(this.apiUrl).pipe(
  //     map((response:any) => response.meals)
  //   );
  // }
}
