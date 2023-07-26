import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
