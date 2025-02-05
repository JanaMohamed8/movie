import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PosterComponent } from './poster/poster.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
    {path: "", redirectTo:'poster' , pathMatch: "full"},
   {path:'home' ,component: HomeComponent ,title:'MOVIES'},
   {path:'poster',component: PosterComponent ,title:"Home"},
   {path:'signup',component: SignupComponent ,title:"SignIn"},
   {path:'signin',component: SigninComponent,title:"SignUp"},
]
