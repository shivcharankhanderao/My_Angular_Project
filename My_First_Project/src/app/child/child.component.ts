import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreDataService } from '../store-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  getChildData:any;
  @Input() dataFromParent : any;
  @Output() dataFromChild = new EventEmitter <any>;
  
  constructor(private storeDataService : StoreDataService){

  }
  get(){
    this.getChildData=this.storeDataService.setParentData
  }

  sendData(data : any){
    console.log('Child>>', data.target.value);
    let childValue=data.target.value;
    this.dataFromChild.emit(childValue);
    

  }

}
