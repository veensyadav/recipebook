import { Component } from "@angular/core";
import { Data } from "@angular/router";
import { DataStorageServices } from "../shared/data-storage.service";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {
    constructor(private dataStorageService : DataStorageServices) {}

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }
    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }
}
