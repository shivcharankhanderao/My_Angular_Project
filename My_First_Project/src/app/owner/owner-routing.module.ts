import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { PathNotFoundComponent } from '../path-not-found/path-not-found.component';

const routes: Routes = [
  {path : 'ownerLogin', component : OwnerLoginComponent },
  // {path : '**', component : PathNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
