import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private appNames: string[]=[];
  
  
// private appName!:string;
  constructor() { }

  getFavourites(){
    return this.appNames;
  }

  setFavourites(appName:string)
  {
// console.log(appName);
    let index:number=this.appNames.indexOf(appName);
    if(index>=0)
    {
      alert(appName+" already added to favourites");
    }
    else{
    this.appNames.push(appName);
    }
    // console.log(this.appNames);

  }

  // deleteFromFav(appName:string)
  // {
  //   let index:number=this.appNames.indexOf(appName);
  //   if(index>=0)
  //   {
  //     this.appNames.splice(index,1);
  //   }
  // }
}
