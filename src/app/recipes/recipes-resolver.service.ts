import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Route, RouterState, RouterStateSnapshot } from "@angular/router";
import { DataStorageServices } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe []>{
    constructor( private dataStorageService: DataStorageServices, private recipesService : RecipeService) {}

    resolve(route : ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recipes = this.recipesService.getRecipes();

        if(recipes.length === 0){
            return this.dataStorageService.fetchRecipes();
        } else {
            return recipes;
        }
        
    }
}