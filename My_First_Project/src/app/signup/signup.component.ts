import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm! : FormGroup;
  // name : string : 'shiv';
  // name : string;

  constructor( private formbuilder : FormBuilder){

  }

  ngOnInit(){
    this.signUpFormControlls()
  }
  signUpFormControlls(){
    this.signUpForm = this.formbuilder.group({
      name : ['',[Validators.required,Validators.pattern("[a-zA-Z]*$"),Validators.minLength(10)]],
      email : [],
      contact : [],
      address : [],
      gender : ['male']
    })
  }

}
