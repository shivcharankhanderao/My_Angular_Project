import { Component } from '@angular/core';
import { StoreDataService } from '../store-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData : any;
  valueFromChild : any;

  
  constructor(private storeDataService : StoreDataService){

  }
  set(){
    this.storeDataService.setParentData = "Shiv patil"
  }

  getData(value : any){
    console.log('Parent>>', value);
    this.valueFromChild = value;
  }

}
