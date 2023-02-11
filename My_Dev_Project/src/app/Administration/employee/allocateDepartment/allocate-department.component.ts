import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { Department } from 'src/app/model/department';
import { EmployeeService } from 'src/app/services/employee.service';
import { NotificationService } from 'src/app/services/notification.service';
interface City {
  name: string,
  code: string,
  inactive:boolean
}
@Component({
  selector: 'app-allocate-department',
  templateUrl: './allocate-department.component.html',
  styleUrls: ['./allocate-department.component.css'],
  providers: [MessageService]
})

export class AllocateDepartmentComponent implements OnInit {
  cities: City[];
  selectedCity: City;
  department:any;
  txtEnable:boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private employeeService : EmployeeService,private messageService: MessageService
    ,private notificationService : NotificationService) { 
    console.log(data);

    this.cities = [
      {name: 'New York', code: 'NY', inactive: false},
      {name: 'Rome', code: 'RM', inactive: true},
      {name: 'London', code: 'LDN', inactive: false},
      {name: 'Istanbul', code: 'IST', inactive: true},
      {name: 'Paris', code: 'PRS', inactive: false}
  ];
  }

  ngOnInit(): void {
    debugger;
   this.employeeService.getAllDepartment().subscribe(item=>{
    this.department = item;
   })
  }
  save(){
    debugger;
    this.notificationService.success("success");
   // this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

}
