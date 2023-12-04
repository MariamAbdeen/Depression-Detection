 import { Component } from '@angular/core';
import {  FormControl,FormGroup ,Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService , private _Router:Router, private titleService:Title){ 
    this.titleService.setTitle("Register");

    if(localStorage.getItem('userToken') !== null)
    {
      _Router.navigate(['/home']);
    }

   }
  isLoading:boolean=false;
  apiError:string='';
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null ,[Validators.required ,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
   rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
   phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },{validators : this.repasswordMatch});
  repasswordMatch( registerForm:any){
    let passwordcontrol= registerForm.get('password');
    let rePasswordcontrol= registerForm.get('rePassword');
    if(passwordcontrol.value ==rePasswordcontrol.value){
      return null;
    }else{
      rePasswordcontrol.setErrors({passwordMatch:'password&rePassword not match'})
      return {passwordMatch:'password&rePassword not match'};
    }

  }
  register(registerFormData:FormGroup){
    this.isLoading=true;
    if (this.registerForm.valid) {
      this._AuthService.register(this.registerForm.value).subscribe({
        next:(response)=>{
          if (response.message=='success') {
            this.isLoading=false;
            this._Router.navigate(['/Login'])
          }
        },
        error:(err)=>{
          this.isLoading=false;
          // this.apiError=err.error.errors.msg

          console.log(err.error.message) 
        
            this.apiError = err.error.message;
          }  
        
            
        
      })
      }
     
    }
   
    
  }

