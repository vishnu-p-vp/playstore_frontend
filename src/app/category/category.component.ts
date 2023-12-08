import { Component, OnInit } from '@angular/core';
import { App } from '../_model/app.model';
import { CategoryService } from '../_services/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApplicationService } from '../_services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  
  constructor(private categoryService:CategoryService,
    private applicationService:ApplicationService,
    private router: Router){}
  appDetails: App[] =[];
  categoryName!: string;
  ngOnInit(): void {
    this.getApps();
    this.getCategoryName();
  }
  getCategoryName() {
    this.categoryName=this.categoryService.getCategoryName();
  }

  public getApps(){
    this.categoryService.getApps().subscribe(
      (resp: App[])=>
      {
        console.log(resp);
        this.appDetails=resp;
      },(error: HttpErrorResponse)=>{
        console.log(error);
      }
    
   );
  }


  public getParticularApp(appName:string){
    // console.log(appName);
    this.applicationService.setApplicationName(appName);
    this.router.navigate(['/applicationDetails']);
  }
}
