import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  constructor(private httpclient: HttpClient) { }

  public setFavs(appName:string){
return this.httpclient.post('http://localhost/8081/addFavourites',appName);
  }
}
