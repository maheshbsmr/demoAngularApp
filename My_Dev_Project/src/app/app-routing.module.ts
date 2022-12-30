import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesComponent } from './Accounts/fees/fees.component';
import { FeesSetupComponent } from './Accounts/feesSetup/fees-setup.component';
import { LoginComponent } from './Login/login/login.component';
import { MainComponent } from './main/main.component';
import { Role } from './model/role/role';
import { TimeComponent } from './Time/time/time.component';
import { AuthGuard } from './_helprs/AuthGuard';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:MainComponent, canActivate: [AuthGuard],   data: { roles: [Role.Admin] },children:[
  {path:'fees',component:FeesComponent,canActivate: [AuthGuard]},
  {path:'feesSetup',component:FeesSetupComponent},
  {path:'timesetup',component:TimeComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
 