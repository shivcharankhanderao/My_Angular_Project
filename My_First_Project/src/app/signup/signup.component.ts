import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { StoreDataService } from '../store-data.service';
import { Router } from '@angular/router';
import { UserDataService } from '../user/user-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm! : FormGroup;
  // name : string : 'shiv';
  // name : string;
  data : any;

  constructor( private formbuilder : FormBuilder, private storeDataService : StoreDataService,
    private router : Router, private userDataService : UserDataService){

  }

  ngOnInit(){
    this.signUpFormControlls()
    this.data=this.userDataService.jData
    console.log('this.data>>', this.data);

    
    

  }
  signUpFormControlls(){
    this.signUpForm = this.formbuilder.group({
      name : ['',[Validators.required,Validators.pattern("[a-zA-Z ]*$"),Validators.minLength(10),this.storeDataService.whiteSpaceValidator]],
      mobNo : ['',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      email : [],
      address : [],
      gender : ['male']
    })
  }

  submit(){
    console.log(this.signUpForm.value);
    this.storeDataService.userFullName= this.signUpForm.value.name
    this.router.navigateByUrl('landing');
    
  }

}
