import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router : Router,
    private commonService : CommonService){}

  journey(journey:string){
    if (journey === 'admin') {
      this.router.navigateByUrl('admin');
      this.commonService.journey="admin"

    } else if (journey === 'owner') {
      this.router.navigateByUrl('owner');
      this.commonService.journey="owner"

    } else {
      this.router.navigateByUrl('user');
      this.commonService.journey="user"

    }

  }

}
