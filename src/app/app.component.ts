import { Component } from '@angular/core';
import { UserAuthService } from './_services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from './_services/user.service';
import { CategoryService } from './_services/category.service';
import { ApplicationService } from './_services/application.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playstore-angular';
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,
    private categoryService: CategoryService,
    private applicationService:ApplicationService
  ) {}

  ngOnInit(): void {}

  public appName:string="";
  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/']);
  }


  

  public isAdmin() {
    return this.userAuthService.isAdmin();
  }

  public isUser() {
    return this.userAuthService.isUser();
  }

  public category(categoryName: string){
    console.log(categoryName);
    // this.router.navigate(['/category/',categoryName]);
    this.categoryService.setCategoryName(categoryName);
   //this.categoryService.getApps(categoryName);
    this.router.navigate(['/category']);
  }

  public search(searchForm: NgForm){
    this.appName=searchForm.value.appName;
    // console.log(this.appName);
    this.applicationService.setApplicationName(this.appName);
    this.router.navigate(['/applicationDetails']);
  }
}
