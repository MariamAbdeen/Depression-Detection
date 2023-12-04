import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import{HttpClient}from'@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LinkService {
  userData=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient , private _Router:Router) { }
Txt(userData:Object):Observable<any>
  {
   return this._HttpClient.post('http://127.0.0.1:5000/predict',userData)
  }
  



}
