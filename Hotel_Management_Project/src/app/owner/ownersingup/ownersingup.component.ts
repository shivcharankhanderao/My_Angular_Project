import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownersingup',
  templateUrl: './ownersingup.component.html',
  styleUrls: ['./ownersingup.component.scss']
})
export class OwnersingupComponent {
  signUpForm! : FormGroup

  constructor(private router : Router, private formbuilder : FormBuilder){

  }

  ngOnInit(){
    this.signUpFormDetails();
  }

  signUpFormDetails(){
    this.signUpForm= this.formbuilder.group({
      name : [],
      email : [],
      mobile : [],
      password : [],
      confirmPassword : [],
      gender : []

    })
  }

  back(){
    this.router.navigateByUrl('/owner/ownerHome');
  }

}
