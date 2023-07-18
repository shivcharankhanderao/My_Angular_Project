import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { LandingComponent } from './landing/landing.component';
import { DirectiveInAngularComponent } from './directive-in-angular/directive-in-angular.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'directive', component: DirectiveInAngularComponent},
  { path : 'parent', component : ParentComponent},
  { path : 'child', component : ChildComponent},
  // {path :'', component: HomeComponent},
  // {path :'home', component :HomeComponent},
  // {path :'admin', loadChildren:()=> import('./admin/admin.module').then(mod => mod.AdminModule)},
  // {path : 'owner', loadChildren:()=> import('./owner/owner.module').then(m=> m.OwnerModule)},
  {path :'user', loadChildren:()=> import('./user/user.module').then(m=> m.UserModule)},
  // {path : '**', component : PathNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
