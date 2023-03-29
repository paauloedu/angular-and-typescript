import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredient[]>(); // Registra se houve mudança de ingredientes

  private ingredients: Ingredient[] = [
    new Ingredient('Tomate', 2),
    new Ingredient('Cebola', 2),
    new Ingredient('Calabresa', 1),
    new Ingredient('Queijo', 1),
  ];

  getIngredients() {
    // Como aqui retorna uma copia, quando adicionamos um novo item, estamos adicionando a matriz original.
    // Logo, precisamos de um ingredientsChange para checkar se essa mudança ocorreu
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice()); // Emito um novo evento de mudança sempre que add um ingrediente
  }

  addIngredients(ingredients: Ingredient[]) {
    /* Poderia fazer um for, mas ai teriam muitos emit, dá pra usar um recurso do ECMA '...' 
     que adiciona ao final da list, como aprendido em guide-typescript: 
     https://github.com/paauloedu/angular-and-typescript/tree/master/guide-typescript     
    */

    // for (let ingredient of ingredients) this.addIngredient(ingredient);
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
