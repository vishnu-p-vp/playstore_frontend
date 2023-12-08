import { Component, OnInit } from '@angular/core';
import { Favourites } from '../favourites';
import { App } from '../_model/app.model';
import { FavouritesService } from '../_services/favourites.service';
import { ApplicationService } from '../_services/application.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit{
  

  // private appNames!: Array<string>;
  // appDetails: App[] =[];

  private appNamesLS!: Array<string>;
  appDetailsLS: App[] =[];
  private appNamesLSDelete!: Array<string>;
  private favCheck:boolean=false;

  constructor(private applicationService:ApplicationService,
    private favService:FavouritesService){}

    favCheckFun()
    {
      // console.log(this.favCheck);
      return this.favCheck;
    }

  ngOnInit(): void {
    // this.appNames=this.favService.getFavourites();
    // for(var i=0;i<this.appNames.length;i++)
    // {
    //   this.applicationService.setApplicationName(this.appNames[i]);
    //   this.applicationService.getParticularApp().subscribe(
    //     (resp)=>{this.appDetails.push(resp)},
    //     (err)=>{console.log(err)}
    //     )
    // }




    // Local Storage
    let favsLS = JSON.parse(localStorage.getItem('favs')??'[]');
    this.appNamesLS=favsLS;
    for(var i=0;i<this.appNamesLS.length;i++)
    {
      this.applicationService.setApplicationName(this.appNamesLS[i]);
      this.applicationService.getParticularApp().subscribe(
        (resp)=>{this.appDetailsLS.push(resp)},
        (err)=>{console.log(err)}
        )
    }
    console.log(this.appNamesLS.length);

    if(this.appNamesLS.length===0){
      this.favCheck=true;
    }

    
  }
// public getFavourites(){
//   // this.apps=this.favourites.getFavourites();
//   this.apps.push(this.favourites.getFavourites());
//   console.log(this.apps);
// }


// deleteApp(appName: string)
//   {
//    this.favService.deleteFromFav(appName);
//    this.ngOnInit();
//   }


clear()
{
  localStorage.removeItem('favs');
  location.reload();
}

deleteApp(appName: string)
{
  
  let favsLS1 = JSON.parse(localStorage.getItem('favs')??'[]');
  
  this.appNamesLSDelete=favsLS1;
  console.log(this.appNamesLSDelete)
  let indexToDelete=this.appNamesLSDelete.indexOf(appName);
  console.log(indexToDelete);
  if(indexToDelete!==-1)
  {
    this.appNamesLSDelete.splice(indexToDelete,1);
  }  
  localStorage.setItem('favs',JSON.stringify(this.appNamesLSDelete));
  // this.ngOnInit();
  location.reload();
}


}
