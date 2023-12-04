
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { RegisterComponent } from './component/register/register.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { LoginComponent } from './component/login/login.component';
import { QuestionComponent } from './component/question/question.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from'@angular/common/http';
import { AiComponent } from './component/ai/ai.component';
import { DoctorsComponent } from './component/doctors/doctors.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { BlankWithoutnavComponent } from './layouts/blank-withoutnav/blank-withoutnav.component';
import { BlogComponent } from './component/blog/blog.component';
import { AnswerComponent } from './component/answer/answer.component';
import { RelationComponent } from './component/relation/relation.component';
import { TreatmentComponent } from './component/treatment/treatment.component';
import { TeamComponent } from './component/team/team.component';
// imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    QuizComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    LoginComponent,
    QuestionComponent,
    AiComponent,
    DoctorsComponent,
    BlankLayoutComponent,
    BlankWithoutnavComponent,
    BlogComponent,
    AnswerComponent,
    RelationComponent,
    TreatmentComponent,
    TeamComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
