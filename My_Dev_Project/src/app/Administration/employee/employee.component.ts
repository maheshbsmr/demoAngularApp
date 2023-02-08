import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import { AddEmployeeComponent } from '../addEmployee/add-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList :any;
  items:any;
  displayedColumns: string[] = ['EmpId', 'FirstName', 'LastName', 'FullName','Image','action'];
  constructor(private employee : EmployeeService,public dialog: MatDialog) { }

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
  
}
