import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { QuestionComponent } from './component/question/question.component';
import { DoctorsComponent } from './component/doctors/doctors.component';
import { AiComponent } from './component/ai/ai.component';
import * as blankLayoutComponent from './layouts/blank-layout/blank-layout.component';
import { BlankWithoutnavComponent } from './layouts/blank-withoutnav/blank-withoutnav.component';
import { BlogComponent } from './component/blog/blog.component';
import { AnswerComponent } from './component/answer/answer.component';
import { RelationComponent } from './component/relation/relation.component';
import { TreatmentComponent } from './component/treatment/treatment.component';
import { TeamComponent } from './component/team/team.component';
const routes: Routes = [

  {path:'',component:BlankWithoutnavComponent,children:[
    {path:'',redirectTo:'Login',pathMatch:'full'},
    {path:'Login',component:LoginComponent},
    {path:'signUp',component:RegisterComponent},
 
    {path:'home',component:HomeComponent},  
      {path:'Aboutus',component:TeamComponent}


  ]},
  {path:'',component:blankLayoutComponent.BlankLayoutComponent,children:[
    
    {path:'About',component:AboutComponent},
    {path:'txttest',component:QuizComponent},
      {path:"imgtest",component:QuestionComponent},
    {path:'Hotlines',component:DoctorsComponent},
    {path:'phrases',component:AiComponent},
    {path:'Depression',component:BlogComponent},
    {path:'Qu&Answer',component:AnswerComponent},
    {path:'effect',component:RelationComponent},
    {path:'Treatment',component:TreatmentComponent}


  ]} ,
  
  
  {path:'**' ,component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
