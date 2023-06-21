import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-in-angular',
  templateUrl: './directive-in-angular.component.html',
  styleUrls: ['./directive-in-angular.component.css']
})
export class DirectiveInAngularComponent {
  show1=true;
  show2=false;
  toshowpara1! : string;
  toshowpara2 : string ='shivcharan';
  undefinedProperty : any;
  nullProperty = null;

  toggel = true;

  toggelEffect(){
    // this.toggel = false;
    this.toggel = !this.toggel;
  }


}
