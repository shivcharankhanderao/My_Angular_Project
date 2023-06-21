import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router: Router) {

  }
  loginButton() {
    this.router.navigateByUrl('/login');
  }
  studentActivity() {
    this.router.navigateByUrl('/user/userLogin');
  }
  directive(){
    this.router.navigateByUrl('/directive');
  }

}
