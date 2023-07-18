import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { SharedModule } from '../shared/shared.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UserDemoComponent } from './user-demo/user-demo.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    // UserDemoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    // FormsModule,
    // ReactiveFormsModule
    SharedModule
  ]
})
export class UserModule { }
