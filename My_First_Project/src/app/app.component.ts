import { BindingPipe } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My_First_Project';

  firstName: string = 'shiva';
  firstName1 = 'shiva';
  firstName2!: string; // (!) optional
  surName: any;
  surName2: any = true;
  formTitle: string = 'Login Form...'
}

//data binding in angular:
// two types;
// 1. one way data Binding 
// a.string interpolation {{}}
// 2. two way data binding
