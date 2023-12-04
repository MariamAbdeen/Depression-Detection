import { Component } from '@angular/core';
import {  FormControl,FormGroup ,Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router, private titleService:Title){ 
    this.titleService.setTitle("Login");
    //    if(localStorage.getItem('token')!=null)

  if(localStorage.getItem('userToken') !== null)
  {
    _Router.navigate(['/home']);
  } }
  isLoading:boolean=false;
  apiError:string='';
  LoginForm:FormGroup=new FormGroup({

    email:new FormControl(null ,[Validators.required ,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
  
  });

 Login(LoginForm:FormGroup){
    this.isLoading=true;
    if (this.LoginForm.valid) {
      
      this._AuthService.Login(this.LoginForm.value).subscribe({
       
        
        next:(response)=>{
          if (response.message=='success') {
            localStorage.setItem('userToken',response.token);
            this._AuthService.decodeUserData();
            this.isLoading=false;
            this._Router.navigate(['/home'])
          }
        },
        error:(err)=>{
          this.isLoading=false;
          // this.apiError=err.error.errors.msg
          console.log(err) 
          console.log(err.error.message) 
        
            this.apiError = err.error.message;
           }       
        
      })
      
     
    }}


   
}
