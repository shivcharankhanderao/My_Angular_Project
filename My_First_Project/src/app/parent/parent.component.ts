import { Component } from '@angular/core';
import { StoreDataService } from '../store-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData : any;
  constructor(private storeDataService : StoreDataService){

  }
  set(){
    this.storeDataService.setParentData = "Shiv patil"
  }

}
