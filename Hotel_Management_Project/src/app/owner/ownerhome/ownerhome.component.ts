import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {
  loginForm! : FormGroup;

  constructor(private router : Router, private formBuilder : FormBuilder){

  }

  ngOnInit(){
    this.loginFormDetails()
    
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
    this.router.navigateByUrl('/owner/ownerSuccess')
    
  }

}
