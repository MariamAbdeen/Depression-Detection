import { LinkService } from './../../link.service';
import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  constructor(private _LinkService:LinkService , private _Router:Router, private titleService:Title){ 
 

   }
   isLoading:boolean=false;
   txtForm:FormGroup=new FormGroup({})
   txt( txtForm:FormGroup){
    this.isLoading=true;
    if (this. txtForm.valid) {
      
      this._LinkService.Txt(this. txtForm.value).subscribe({
        next:(response)=>{
          if (response.message=='you are depressed') {
           
           
            this.isLoading=false;
            this._Router.navigate(['/about'])
          }
        },
      
        
        // next:(response)=>{
        //   if (response.message=='you are depressed') {
           
           
        //     this.isLoading=false;
        //     this._Router.navigate(['/about'])
        //   }
        // },
      
         
        
      })
      
    }}


   
  }
  
