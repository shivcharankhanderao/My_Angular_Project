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
  cars = ['mini cup', 'jaguar', 'swift', 'marcedeez'];

  tableHeading : string[] = ['CarName', 'CarPrice', 'Color'];
  carDetails =[
    {carName : 'mini cup', carPrice : 1200000, color : 'white'},
    {carName : 'swift', carPrice : 800000, color : 'white'},
    {carName : 'jaguar', carPrice : 1400000, color : 'white'},
    {carName : 'marcedeez', carPrice : 1600000, color : 'white'},
    {carName : 'i10', carPrice : 1100000, color : 'black'},
  ];

  // imp. interview que.
  data = [20,30,10,40,[60,50,70]];
  data2 : any[] =[];
  data3 : any[] =[];
  // let  xyz= []; // js / within function only
  // xyz =[]; property with empty array(interview que.)
  color ='pink';

  constructor(){

  }

  ngOnInit(){
    this.data.forEach((item,i)=>{
      if (i != 4) {
        this.data2.push(item);
      }
    })
    this.data.forEach((item:any,i)=>{
      if (i ==4) {
        this.data3 =[...item];
      }
    })
  }

  toggelEffect(){
    // this.toggel = false;
    this.toggel = !this.toggel;
  }


}
