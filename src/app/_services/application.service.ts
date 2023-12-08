import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { App } from '../_model/app.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private applicationName!:string;
  constructor(private httpClient:HttpClient) { }

  setApplicationName(applicationName: string)
  {
    this.applicationName=applicationName;
  }

  getApplicationName()
  {
    return this.applicationName;
  }

  public getParticularApp() {
    // console.log(this.categoryName);
    return this.httpClient.get<App>("http://localhost:8081/findApp/"+this.applicationName);
  }

  
}
