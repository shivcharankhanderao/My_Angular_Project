import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {
  userFullName : any;
  setParentData: any;

  constructor() { }

whiteSpaceValidator(name:any){
  let data=name.value;
  let newdata=data.trim();
  let isValid= data.length != newdata.length;
  return isValid ? {whiteSpace : true} : null;
}
}
