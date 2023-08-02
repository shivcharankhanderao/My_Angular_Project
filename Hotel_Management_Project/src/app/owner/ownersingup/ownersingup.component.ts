import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownersingup',
  templateUrl: './ownersingup.component.html',
  styleUrls: ['./ownersingup.component.scss']
})
export class OwnersingupComponent {
  signUpForm!: FormGroup
  journey! : string;
  postResponse : any;
  constructor(private router: Router, private formbuilder: FormBuilder,
    private commonApiCallService: CommonApiCallService,
    private commonService : CommonService) {

  }

  ngOnInit() {
    this.journey= this.commonService.journey
    console.log('this.journey>>',this.journey);
    
    this.signUpFormDetails();
  }

  signUpFormDetails() {
    this.signUpForm = this.formbuilder.group({
      name: [],
      email: [],
      mobile: [],
      password: [],
      confirmPassword: [],
      gender: []

    })
  }

  back() {
    this.router.navigateByUrl('/owner/ownerHome');
  }

  submit(){
    let request = {
      Username : this.signUpForm.value.name,
      Email : this.signUpForm.value.email,
      Mobile : this.signUpForm.value.mobile,
      Password : this.signUpForm.value.password,
      ConfirmPassword : this.signUpForm.value.confirmPassword,
      Gender : this.signUpForm.value.gender
    }
    this.commonApiCallService.postApiCall(this.journey ,request).subscribe(resp=>{
      console.log(resp);
      this.postResponse = resp;
      
    })
    if (this.postResponse?.id) {
      this.router.navigateByUrl('/owner/ownerSuccess') 
    }
  }

}
