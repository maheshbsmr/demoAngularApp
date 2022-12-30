import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesComponent } from './Accounts/fees/fees.component';
import { FeesSetupComponent } from './Accounts/feesSetup/fees-setup.component';
import { EntryComponent } from './Attendence/entry/entry.component';
import { LoginComponent } from './Login/login/login.component';
import { MainComponent } from './main/main.component';
import { Role } from './model/role/role';
import { EmployeeAccessComponent } from './profiles-access/employee-access/employee-access.component';
import { TimeSetupComponent } from './Time-Mgmt/time-setup/time-setup.component';
import { AuthGuard } from './_helprs/AuthGuard';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:MainComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] }, children:[
  {path:'fees',component:FeesComponent,canActivate: [AuthGuard], data: { roles: [Role.Admin] }},
  {path:'feesSetup',component:FeesSetupComponent},
  {path:'attendenceEntry',component:EntryComponent},
  {path:'timesetup',component:TimeSetupComponent},
  {path:'empAccess',component:EmployeeAccessComponent},

  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
 