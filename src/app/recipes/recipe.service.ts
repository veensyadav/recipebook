import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoopingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Chicken 65', 
    //         'Taste the spiceness and other Paprico flavours', 
    //         'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cold-spiced-chicken-recipe-1557951578.jpg?crop=1xw:1xh;center,top&resize=480:*',
    //         [
    //             new Ingredient('Chicken', 1),
    //             new Ingredient('tablespoon Curd', 4),
    //             new Ingredient('teaspoon salt', 1/3),
    //             new Ingredient('teaspoon red chili powder', 2),
    //             new Ingredient('teaspoon turmeric', 1/2),
    //             new Ingredient('teaspoon garlic paste', 1),
    //             new Ingredient('teaspoon salt', 1/3),
    //             new Ingredient('cup corn Starch', 4),
    //             new Ingredient('cup Rice Flour', 2),
    //             new Ingredient('lt Oil', 1)
    //         ]),
    //     new Recipe(
    //         'Fettuccine Alfredo', 
    //         'The perfect homemade fettuccine alfredo using heavy cream, butter, parmesan cheese, and a touch of ...',
    //         'https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg',
    //         [
    //             new Ingredient('Fettuccine Pasta', 1),
    //             new Ingredient('Tablespoons Butter', 6),
    //             new Ingredient('Garlic Clove', 1),
    //             new Ingredient('Cups Heavy Cream', 1.5),
    //             new Ingredient('teaspoon Salt', 1/4),
    //         ]),
    //   ];
    private recipes: Recipe[] = [];

constructor(private slService: ShoopingListService) {}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }

}