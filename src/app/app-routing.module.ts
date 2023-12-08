import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddAppComponent } from './add-app/add-app.component';
import { ShowAllAppsComponent } from './show-all-apps/show-all-apps.component';
import { AllAppsAdminComponent } from './all-apps-admin/all-apps-admin.component';
import { CategoryComponent } from './category/category.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  // { 
  //   path: '', 
  //   component: AppComponent 
  // },
  { 
    path: 'login', 
    component: LoginComponent 
  },
 
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'adminHome', 
    component: AdminHomeComponent 
  },
  { 
    path: 'addApp', 
    component: AddAppComponent 
  },
  { 
    path: '', 
    component: ShowAllAppsComponent 
  },
  { 
    path: 'allAppsAdmin', 
    component: AllAppsAdminComponent 
  },
  { 
    path: 'category', 
    component: CategoryComponent 
  },
  { 
    path: 'applicationDetails', 
    component: ApplicationDetailsComponent 
  },
  { 
    path: 'favourites', 
    component: FavouriteComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
