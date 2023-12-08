import { Component, OnInit } from '@angular/core';
import { App } from '../_model/app.model';
import { ApplicationService } from '../_services/application.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Favourites } from '../favourites';
import { FavouritesService } from '../_services/favourites.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit{

  constructor(private applicationService:ApplicationService,
    private favService:FavouritesService){}
  appDetails!: App;
  categoryName!: string;
  // favourites: Favourites=new Favourites();
  ngOnInit(): void {
    this.getApps();
    this.getCategoryName();
  }
  getCategoryName() {
    this.categoryName=this.applicationService.getApplicationName();
  }

  addToFavourites(appName:string){
    // console.log(appName);
    // this.favourites.setFavourites(appDetails);
    this.favService.setFavourites(appName);

    let favsLS = JSON.parse(localStorage.getItem('favs')??'[]'); 
    let flag=false;
    if(favsLS.length===0)
    {
      favsLS.push(appName);
      localStorage.setItem('favs',JSON.stringify(favsLS));
    }
    else
    {
      for(let eachFavsLS of favsLS)
      {
        if(eachFavsLS===appName)
        {
          flag=true;
          break;
        }
      }

      if(!flag)
      {
        favsLS.push(appName);
        localStorage.setItem('favs',JSON.stringify(favsLS));
      }
    }
  }

  public getApps(){
    this.applicationService.getParticularApp().subscribe(
      (resp: App)=>
      {
        console.log(resp);
        this.appDetails=resp;
        // console.log(this.appDetails);
      },(error: HttpErrorResponse)=>{
        console.log(error);
      }
    
   );
  }
}
