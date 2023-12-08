import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddAppComponent } from './add-app/add-app.component';
import { ShowAllAppsComponent } from './show-all-apps/show-all-apps.component';
import { AllAppsAdminComponent } from './all-apps-admin/all-apps-admin.component';
import { CategoryComponent } from './category/category.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { FavouriteComponent } from './favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomeComponent,
    AddAppComponent,
    ShowAllAppsComponent,
    AllAppsAdminComponent,
    CategoryComponent,
    ApplicationDetailsComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
