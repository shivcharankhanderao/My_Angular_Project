import { Component, Input } from '@angular/core';
import { StoreDataService } from '../store-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  getChildData:any;
  @Input() dataFromParent : any;
  
  constructor(private storeDataService : StoreDataService){

  }
  get(){
    this.getChildData=this.storeDataService.setParentData
  }

}
