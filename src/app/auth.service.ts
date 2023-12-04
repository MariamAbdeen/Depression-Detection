import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import{HttpClient}from'@angular/common/http';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem('userToken') !== null)
    {
      this.decodeUserData()
    }

    console.log('auth service');
  }

  decodeUserData(){
    let encodeData= JSON.stringify( localStorage.getItem('userToken'));
    let decodeData:any=jwtDecode(encodeData);
    console.log(decodeData);
  
    this.userData.next(decodeData);
    
  }

  logOut()
  {
    localStorage.removeItem('userToken');
   
    localStorage.removeItem('index');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
  // logout(){
  //   localStorage.removeItem('token');
  //   this.userToken="";
  //   this._Router.navigate(['/home'])
  //  }
    register(userData:Object):Observable<any>
    {
     return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
    }
    Login(userData:Object):Observable<any>
    {
     return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData)
    }
   
}
