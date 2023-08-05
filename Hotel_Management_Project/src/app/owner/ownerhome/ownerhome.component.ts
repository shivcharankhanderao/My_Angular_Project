import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {

  loginForm! : FormGroup;
  endPoint! : string;
  ownerData : any;
  validUser : boolean = false;

  constructor(private router : Router, private formBuilder : FormBuilder,
    private commonService : CommonService, private commonApiCallService : CommonApiCallService ){

  }

  ngOnInit(){
    this.endPoint = this.commonService.journey;
    console.log('this.endPoint>>', this.endPoint);
    
    this.loginFormDetails();
    // this.getOwnerApiData();
    
  }

  loginFormDetails(){
    this.loginForm= this.formBuilder.group({
      userName : [],
      password : []
    })

  }

  back(){
    this.router.navigateByUrl('home');
  }

  login(){
    console.log('this.loginForm.value', this.loginForm.value);
    if ( this.loginForm.value.userName) {
      this.commonService.userName =  this.loginForm.value.userName;
    }
    this.getOwnerApiData();
    console.log('this.ownerData>>', this.ownerData);

    if ( this.ownerData) {
      this.isValidUser();
      if(this.validUser){
        this.router.navigateByUrl('owner/ownerSuccess');
      }else{
        this.router.navigateByUrl('owner/ownerHome');
      }
    }
    
    
  }

  getOwnerApiData(){
    this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponce=>{
      this.ownerData = getOwnerResponce;
    })
  }

  isValidUser(){
    this.ownerData.forEach((element:any)=>{
      if(element.Username === this.loginForm.value.userName && element.Password === this.loginForm.value.password){
         this.validUser = true;
      }
    })
    return
  }

}
