import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreDataService } from '../store-data.service';
import { UserDataService } from '../user/user-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  fullName : any;
  // stringified JSON
  jsonData= {

    "admin": [
      {
        name : "om",
        age : 23,
        mob : 9876989898
      }
  ],
  "statusCode" : 32,
  "massage" : "success"
  }

   //  JSON : javascript object Notification:
  //  JSON is a format for storing and transporting data.
  //  JSON is often used when data is sent from a server to a web page.
  //  JSON is a lightweight data interchange format

  sData ={
    admin : [
      {
        name : 'om',
        age : 24,
        mob : 9876765434
      }
    ],
    book :['yoga hint','yogdristi'],
    statusCode : 200,
    massage : 'success'
  }


  constructor(private router: Router, private storeDataService: StoreDataService,
    private userDataService : UserDataService) {

  }

  ngOnInit(){
    this.fullName= this.storeDataService.userFullName
    this.userDataService.jData=this.jsonData
  }
  loginButton() {
    this.router.navigateByUrl('/login');
  }
  studentActivity() {
    this.router.navigateByUrl('/user/userLogin');
  }
  directive(){
    this.router.navigateByUrl('/directive');
  }
  parent(){
    this.router.navigateByUrl('parent');
  }

  show(){
    console.log('sData>>', this.sData.book[1]);
    
    console.log('this.sData>>', this.sData);
    //JSON.stringify
    let stringiFiedData=JSON.stringify(this.sData);
    console.log('stringiFiedData>>', stringiFiedData);
    //JSON.parse
    let parsedData=JSON.parse(stringiFiedData);
    console.log('parsedData>>', parsedData);
    
    
    
  }

}
