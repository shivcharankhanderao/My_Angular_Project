import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';

@Component({
  selector: 'app-newhotelregistration',
  templateUrl: './newhotelregistration.component.html',
  styleUrls: ['./newhotelregistration.component.scss']
})
export class NewhotelregistrationComponent {
  hotelRegistrationForm! : FormGroup;

  constructor(private formBuilder : FormBuilder, private commonApiCallService : CommonApiCallService,
    private router : Router){

  }

  ngOnInit(){
    this.hotelRegistration();
  }
  hotelRegistration(){
    this.hotelRegistrationForm = this.formBuilder.group({
      ownerName : [''],
      ownerContact : [],
      hotelName : [],
      hotelAddress : [],
      hotelContact : [],
      menuBar : [],
      roomAvailable : [],
      ownerPassword : []
    })
  }

  hotelDetails(){
    let endPoint = 'hotelDetails';
    let request = {
      OwnerName : this.hotelRegistrationForm.value.ownerName,
      OwnerContact : this.hotelRegistrationForm.value.ownerContact,
      HotelName : this.hotelRegistrationForm.value.hotelName,
      HotelAddress : this.hotelRegistrationForm.value.hotelAddress,
      HotelContact : this.hotelRegistrationForm.value.hotelContact,
      MenuBar : this.hotelRegistrationForm.value.menuBar,
      RoomAvailable : this.hotelRegistrationForm.value.roomAvailable,
      OwnerPassword : this.hotelRegistrationForm.value.ownerPassword
    }
    this.commonApiCallService.postApiCall(endPoint , request).subscribe((resp:any)=>{
      console.log(resp);
      
    })
    this.router.navigateByUrl('owner/ownerSuccess');
  }

}
