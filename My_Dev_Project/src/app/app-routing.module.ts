import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesComponent } from './Accounts/fees/fees.component';
import { FeesSetupComponent } from './Accounts/feesSetup/fees-setup.component';
import { EmployeeComponent } from './Administration/employee/employee.component';
import { AdmissionDashboardComponent } from './Admissions/admission-dashboard/admission-dashboard.component';
import { ViewAdmissionComponent } from './Admissions/view-admission/view-admission.component';
import { EntryComponent } from './Attendence/entry/entry.component';
import { GlobalSettingsComponent } from './GlobalSettings/global-settings.component';
import { LoginComponent } from './Login/login/login.component';
import { MainComponent } from './main/main.component';
import { Role } from './model/role/role';
import { EmployeeAccessComponent } from './profiles-access/employee-access/employee-access.component';
import { TimeSetupComponent } from './Time-Mgmt/time-setup/time-setup.component';
import { AuthGuard } from './_helprs/AuthGuard';

// const routes: Routes = [
//   {path:'',redirectTo:'/login',pathMatch: 'full'},
//   {path:'login',component:LoginComponent},
//   {path:'home',component:MainComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] }, children:[
//   {path:'fees',component:FeesComponent,canActivate: [AuthGuard], data: { roles: [Role.Admin] }},
//   {path:'feesSetup',component:FeesSetupComponent},
//   {path:'attendenceEntry',component:EntryComponent},
//   {path:'timesetup',component:TimeSetupComponent},
//   {path:'empAccess',component:EmployeeAccessComponent},
//   {path:'viewAdmission',component:ViewAdmissionComponent,data: { roles: [Role.Admin]}},
//   {path:'admissionDashboard',component:AdmissionDashboardComponent},
//   {path:'employeeView',component:EmployeeComponent},
  

//   ]},
  
// ];


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:MainComponent, children :[
  {path:'fees',component:FeesComponent,canActivate: [AuthGuard], data: { roles: [Role.Library], roleType: [Role.SuperUser]}},
  {path:'feesSetup',component:FeesSetupComponent},
  {path:'attendenceEntry',component:EntryComponent},
  {path:'timesetup',component:TimeSetupComponent},
  {path:'empAccess',component:EmployeeAccessComponent},
  {path:'viewAdmission',component:ViewAdmissionComponent,canActivate: [AuthGuard], data: { roles: [Role.Admin],roleType: [Role.None] }},
  {path:'admissionDashboard',component:AdmissionDashboardComponent},
  {path:'employeeView',component:EmployeeComponent},
  {path:'globalSettings',component:GlobalSettingsComponent,canActivate: [AuthGuard], data: { roles: [Role.Admin],roleType: [Role.None] }},
  ],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
 