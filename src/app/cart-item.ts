import { FoodItem } from "./food-item";

export interface CartItem extends FoodItem {
    quantity: number;
  }