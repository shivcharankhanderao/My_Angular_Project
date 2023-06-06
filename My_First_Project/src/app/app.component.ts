import { BindingPipe } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My_First_Project';
  // propertyName: datatype =value/data
  firstName: string = 'shiva';
  firstName1 = 'shiva';
  firstName2!: string; // (!) optional
  surName: any;
  surName2: any = true;
  formTitle: string = 'Login Form...';
  studentName='Shiva';
  amount=1000;
  isFavCity=false;

  myName='shivcharan';
  gender=true;
  isDisable=false;
  eventBindingData=6000;

  twowayBindingTest= 123456;

  testingFunction(x:number , y:number ){

    return x+y;
  }

  testingEventBinding(){
    this.eventBindingData=5000;
  }

  test(){
    console.log(this.twowayBindingTest);
    
  }
}

//data binding in angular:
// two categouries;
// 1. one way data Binding 
// a.string interpolation {{}}
// b.property binding[]
// c.Event binding()
// 2. two way data binding[()]
