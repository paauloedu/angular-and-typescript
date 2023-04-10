import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Torta de Pizza',
      'Uma deliciosa torta com ingredientes e formato de pizza',
      'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg',
      [
        new Ingredient('Tomate', 2),
        new Ingredient('Cebola', 2),
        new Ingredient('Calabresa', 1),
        new Ingredient('Queijo', 1),
      ]
    ),
    new Recipe(
      'Bolinho de queijo',
      'Um perfeito bolinho de queijo com alguns molhos',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/09/breakfast-recipes-fb.jpg',
      [
        new Ingredient('Farinha de Trigo', 1),
        new Ingredient('Tomate', 1),
        new Ingredient('Tempero', 3),
        new Ingredient('Cebola', 1),
        new Ingredient('Queijo', 4),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
