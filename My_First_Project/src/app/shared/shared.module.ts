import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDemoComponent } from '../user/user-demo/user-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberOnlyDirective } from '../user/number-only.directive';



@NgModule({
  declarations: [    // (component, pipe, directive)
    UserDemoComponent,
    NumberOnlyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserDemoComponent,
    FormsModule,
    ReactiveFormsModule,
    NumberOnlyDirective
  ]
})
export class SharedModule { }
