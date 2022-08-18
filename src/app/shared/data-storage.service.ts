import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class DataStorageServices {
    constructor(private http: HttpClient, private recipesService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http.put('https://ng-course-recipe-book-8f050-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes(){
        return this.http
                    .get<Recipe[]>('https://ng-course-recipe-book-8f050-default-rtdb.firebaseio.com/recipes.json')
                    .pipe(map(recipes => {
                        return recipes.map(recipe => {
                            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                        });
                    }),
                    tap(recipes => {
                        this.recipesService.setRecipes(recipes);
                    })
                    )
    }
}