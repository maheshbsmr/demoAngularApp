import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import { MainComponent } from './main/main.component';
import { FeesComponent } from './Accounts/fees/fees.component';
import { FeesSetupComponent } from './Accounts/feesSetup/fees-setup.component';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Login/login/login.component';
import { EntryComponent } from './Attendence/entry/entry.component';
import { TimeSetupComponent } from './Time-Mgmt/time-setup/time-setup.component';
import { EmployeeAccessComponent } from './profiles-access/employee-access/employee-access.component';
import { ViewAdmissionComponent } from './Admissions/view-admission/view-admission.component';
import { AdmissionDashboardComponent } from './Admissions/admission-dashboard/admission-dashboard.component';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';

import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {ChartModule} from 'primeng/chart';
import { EmployeeComponent } from './Administration/employee/employee.component';
import { AddEmployeeComponent } from './Administration/addEmployee/add-employee.component';
//import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FeesComponent,
    FeesSetupComponent,
    LoginComponent,
    EntryComponent,
    TimeSetupComponent,
    EmployeeAccessComponent,
    ViewAdmissionComponent,
    AdmissionDashboardComponent,
    EmployeeComponent,
    AddEmployeeComponent,
  ],
  imports: [
    AppRoutingModule,
     BrowserModule,
     BrowserAnimationsModule,
     HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatSortModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatSelectModule,MatRadioModule,  
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDatepickerModule ,
    MatSlideToggleModule,
    MatBadgeModule,
    MatSidenavModule,
      MatTreeModule,
      MatListModule,
      MatCardModule,
      InputTextModule,
      TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    ChartModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA]
})
export class AppModule { }
