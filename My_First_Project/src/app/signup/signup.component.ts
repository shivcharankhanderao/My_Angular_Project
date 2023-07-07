import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

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
      name : ['',[Validators.required,Validators.pattern("[a-zA-Z ]*$"),Validators.minLength(10)]],
      mobNo : ['',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      email : [],
      address : [],
      gender : ['male']
    })
  }

  submit(){
    console.log(this.signUpForm.value);
    
  }

}
