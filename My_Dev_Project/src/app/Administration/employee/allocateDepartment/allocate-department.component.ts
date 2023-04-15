import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { Department, deptMapping } from 'src/app/model/department';
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
  department:any[]=[];
  dept:any[]=[];
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
  save(data:any){
    debugger;
    let dept = new deptMapping;
    dept.deptId = this.dept[0].DeptId;
    dept.deptName = this.dept[0].DeptDescription;
    dept.empId = parseInt(data.EmpId);
    this.employeeService.postMapping(dept).subscribe((res)=>{
    this.notificationService.success("success");
      console.log('response received')
    }, (error:HttpErrorResponse) => {
      this.notificationService.error(error.error.error[0]);
       console.log(error);
   // throw error;
    });

   // this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }
  selectionChange(event:any){
    debugger;
    this.dept = [];
    let deptId = event.target.value;
     this.dept = this.department.filter(x=>x.DeptId == deptId);

  }
}
