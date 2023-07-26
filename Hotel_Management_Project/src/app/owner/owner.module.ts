import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { SharedModule } from '../common/shared/shared.module';
import { OwnersingupComponent } from './ownersingup/ownersingup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';


@NgModule({
  declarations: [
    OwnerhomeComponent,
    OwnersingupComponent,
    OwnersuccessComponent,
    NewhotelregistrationComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
