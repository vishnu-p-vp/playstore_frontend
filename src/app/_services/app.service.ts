import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { App } from '../_model/app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  public addApp(app:App)
  {
    return this.httpClient.post<App>("http://localhost:8081/addApp",app);
  }

  public getAllApps() {
    return this.httpClient.get<App[]>("http://localhost:8081/all");
  }
  
  public deleteApp(appName: string)
  {
    return this.httpClient.delete("http://localhost:8081/deleteApp?appName="+appName);
  }
}
