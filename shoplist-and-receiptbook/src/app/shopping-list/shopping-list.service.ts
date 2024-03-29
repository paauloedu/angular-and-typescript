import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>(); // Registra se houve mudança de ingredientes
  startedEditing = new Subject<number>();
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

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice()); // Emito um novo evento de mudança sempre que add um ingrediente
  }

  addIngredients(ingredients: Ingredient[]) {
    /* Poderia fazer um for, mas ai teriam muitos emit, dá pra usar um recurso do ECMA '...' 
     que adiciona ao final da list, como aprendido em guide-typescript: 
     https://github.com/paauloedu/angular-and-typescript/tree/master/guide-typescript     
    */

    // for (let ingredient of ingredients) this.addIngredient(ingredient);
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChange.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
