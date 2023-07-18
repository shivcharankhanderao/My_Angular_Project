import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDemoComponent } from '../user/user-demo/user-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [    // (component, pipe, directive)
    UserDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserDemoComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
