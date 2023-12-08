import { Component } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { CategoryService } from '../_services/category.service';
import { NgForm } from '@angular/forms';
import { ApplicationService } from '../_services/application.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
