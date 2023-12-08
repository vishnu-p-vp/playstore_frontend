import { Component, OnInit } from '@angular/core';
import { AppService } from '../_services/app.service';
import { App } from '../_model/app.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ApplicationService } from '../_services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-apps',
  templateUrl: './show-all-apps.component.html',
  styleUrls: ['./show-all-apps.component.css']
})
export class ShowAllAppsComponent implements OnInit{
  constructor(private appService: AppService,
    private applicationService:ApplicationService,
    private router: Router){}
  
  ngOnInit(): void {
    this.getAllApps();
  }

appDetails: App[] =[];



  public getAllApps(){
    this.appService.getAllApps().subscribe(
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
