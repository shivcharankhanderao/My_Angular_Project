import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreDataService } from '../store-data.service';

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
  
  }


  constructor(private router: Router, private storeDataService: StoreDataService) {

  }

  ngOnInit(){
    this.fullName= this.storeDataService.userFullName
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

}
