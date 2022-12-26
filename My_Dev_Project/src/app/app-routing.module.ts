import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesComponent } from './Accounts/fees/fees.component';
import { FeesSetupComponent } from './Accounts/feesSetup/fees-setup.component';

const routes: Routes = [
  {path:'fees',component:FeesComponent},
  {path:'feesSetup',component:FeesSetupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
