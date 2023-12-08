import { Component } from '@angular/core';
import { App } from '../_model/app.model';
import { NgForm } from '@angular/forms';
import { AppService } from '../_services/app.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddAppComponent {
  app: App={
    appId: 0,
    appName: "",
	appDescription: "",
	releaseDate: "",
	categoryName: "",
	appVisibility: true,
  appImageUrl: ""
  }

  constructor(private appService: AppService,private router:Router)
  {
    
  }

  addApp(addAppForm: NgForm){
    this.appService.addApp(this.app).subscribe(
      (response: App) => {
        console.log(response);
        addAppForm.reset();
        this.router.navigate(['/allAppsAdmin']);
        // this.app.productImages = [];
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
