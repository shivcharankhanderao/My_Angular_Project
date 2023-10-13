import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreDataService } from 'src/app/store-data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  signInForm! : FormGroup;
  showSignInForm : boolean = false;
  passwordValue : any;
  confirmPasswordValue : any
  isMatch! : boolean;
  showPassword! : boolean;
  strongPassword =false;
  

  constructor(private fb : FormBuilder, private storeDataService : StoreDataService){}

  showForm(){
    // this.showSignInForm=true;
    this.showSignInForm = ! this.showSignInForm
    this.formDef();
  }
  formDef(){
    this.signInForm=this.fb.group({
      password : [],
      confirmPassword : [],
      name : ['',[this.nameValidation, this.storeDataService.whiteSpaceValidator]]
    })
  }

  nameValidation(inp:any){
    console.log(inp.value);
    let data =inp.value?.toLowerCase();
    let isErr =data.includes('copy');
    return isErr ? {Err : true} : null;
    
  }
  

  password(){       
    this.passwordValue=this.signInForm.value.password;
    if (this.passwordValue == this.confirmPasswordValue) {
      this.isMatch=true;
    }
    else{
      this.isMatch=false;
    }
    let passLength=  this.passwordValue.length;
    if(passLength > 10){
      this.strongPassword=true;
    }
  }

  confirmPassword(){
    this.confirmPasswordValue=this.signInForm.value.confirmPassword;
    if (this.passwordValue == this.confirmPasswordValue) {
      this.isMatch=true;
    }
    else{
      this.isMatch=false;
    }
  }
  
  showpass(){
    this.showPassword=!this.showPassword
  }

}
