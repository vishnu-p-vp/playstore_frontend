import { Component } from '@angular/core';
import { AppService } from '../_services/app.service';
import { App } from '../_model/app.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-apps-admin',
  templateUrl: './all-apps-admin.component.html',
  styleUrls: ['./all-apps-admin.component.css']
})

export class AllAppsAdminComponent {
  constructor(private appService: AppService,
    private router:Router){}
  
  ngOnInit(): void {
    this.getAllApps();
  }

appDetails: App[] =[];



  public getAllApps(){
    this.appService.getAllApps().subscribe(
      (resp: App[])=>
      {
        // console.log(resp);
        this.appDetails=resp;
      },(error: HttpErrorResponse)=>{
        console.log(error);
      }
    
    );
  }

  deleteApp(appName: string)
  {
    this.appService.deleteApp(appName).subscribe(
      (resp)=>{
        this.getAllApps();
        console.log(resp);
      },
      (error:HttpErrorResponse)=>{
        this.getAllApps();
        console.log(error);
      }
    );
    console.log(appName);
  }

  updateApp(appId: number){
    console.log(appId);
    // this.router.navigate(['/addApp',{appId: appId}]);
  }
}
