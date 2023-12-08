import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { App } from '../_model/app.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryName!: string;
  
  constructor(private httpClient: HttpClient) { }
  
  setCategoryName(categoryName: string){
    this.categoryName=categoryName;
    // console.log(this.categoryName);
  }

  getCategoryName(){
    return this.categoryName;
  }

  public getApps() {
    // console.log(this.categoryName);
    return this.httpClient.get<App[]>("http://localhost:8081/category/"+this.categoryName);
  }
}
