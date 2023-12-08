import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  PATH_OF_API = 'http://localhost:8081';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  
  public register(registerData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/registerNewUser', registerData);
  }


  
}
