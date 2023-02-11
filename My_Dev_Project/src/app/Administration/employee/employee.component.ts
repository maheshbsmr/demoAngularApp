import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import { AddEmployeeComponent } from '../addEmployee/add-employee.component';
import { AllocateDepartmentComponent } from './allocateDepartment/allocate-department.component';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList :any;
  items:any;
  displayedColumns: string[] = ['EmpId', 'FirstName', 'LastName', 'FullName','Image','Allocate','action'];
  constructor(private employee : EmployeeService,public dialog: MatDialog, private notificationService : NotificationService) { }

  ngOnInit(): void {
    this.employee.getAllStudent().subscribe(response=>{
      debugger
      this.employeeList = response;
      this.employeeList.forEach((item:any) => {
        item.Image = 'data:image/jpg;base64,' + item.Image;
      })
      console.log(this.employeeList);
    })

    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      },
      {
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
      },
      {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
      }
  ];
  }
  addEmployee(enterAnimationDuration: string, exitAnimationDuration: string){
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width:'1100px',height:'600px',
      data:null,
      enterAnimationDuration,
      exitAnimationDuration,
    }

      );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  AllocateDept(element:any){
    const dialogRef = this.dialog.open(AllocateDepartmentComponent, {
      width:'450px',height:'650px',
      data:element,
    }

      );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  delete(){
    this.notificationService.confirmation("it will be gone forever", () => {
      this.notificationService.success("confirm oked");
    },
    'Are you sure?',
     ()  => {
      this.notificationService.error("confirm canceled");
    });
  }
  
}
