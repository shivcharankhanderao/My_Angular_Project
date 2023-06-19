import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private router : Router){

}
ngOnInit(){
  console.log("home comp.");
  
}

logincomp(){
  this.router.navigateByUrl('/login');
}

adminModuleLogincomp(){
  this.router.navigateByUrl('/admin/adminLogin');
}

userLogin(){
  this.router.navigateByUrl('/user/userLogin');
}
}
