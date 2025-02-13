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
      image: 'https://www.unileverfoodsolutions.com.sg/dam/global-ufs/mcos/SEA/calcmenu/recipes/SG-recipes/vegetables-&-vegetable-dishes/%E7%BB%8F%E5%85%B8%E8%8A%9D%E5%A3%AB%E6%B1%89%E5%A0%A1/main-header.jpg',
      description: 'Juicy beef patty with fresh vegetables'
    },
    { 
      id: 2,
      name: 'Pepperoni Pizza',
      price: 12.99,
      image: 'https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=',
      description: 'Traditional Italian pizza with extra cheese'
    },
    { 
      id: 3,
      name: 'Fresh Fries',
      price: 4.99,
      image: 'https://static.vecteezy.com/system/resources/thumbnails/027/536/411/small/delicious-french-fries-on-a-white-background-photo.jpg',
      description: 'Crispy golden potato fries'
    },
    { 
      id: 4,
      name: 'Garden Salad',
      price: 7.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjucrQeVL67HC0Qgwx44UIwHux7oufh41CAA&s',
      description: 'Fresh seasonal vegetables with dressing'
    },
    { 
      id: 5,
      name: 'Grilled Chicken Sandwich',
      price: 10.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQCVozsFn2fa2ODSbLpXxzrdsGh9YBMdKKg&s',
      description: 'Grilled chicken with lettuce, tomato, and mayo'
    },
    { 
      id: 6,
      name: 'Mushroom & Cheese Pizza',
      price: 11.49,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJ0M4eHpi-LIKJ5pR5r1QbKh-GYYX2Ihggg&s',
      description: 'Delicious pizza topped with mushrooms and melted cheese'
    },
    { 
      id: 7,
      name: 'Onion Rings',
      price: 5.49,
      image: 'https://static.vecteezy.com/system/resources/previews/040/153/365/non_2x/ai-generated-fried-crispy-onion-rings-with-dipping-sauce-generative-ai-photo.jpg',
      description: 'Crispy deep-fried onion rings with a side of sauce'
    },
    { 
      id: 8,
      name: 'Caesar Salad',
      price: 6.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXh4M-dJEXy2t89j4gwD8VQxuaebMCk-txxw&s',
      description: 'Classic Caesar salad with croutons and Parmesan cheese'
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
