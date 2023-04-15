import { Component, OnInit, ViewChild } from '@angular/core';
import { employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import { AddEmployeeComponent } from '../addEmployee/add-employee.component';
import { AllocateDepartmentComponent } from './allocateDepartment/allocate-department.component';
import { NotificationService } from 'src/app/services/notification.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  selection = new SelectionModel<Element>(true, []);
  show :boolean = false;
  employeeList :any;
  items:any;
  isMultipleDelete : boolean = false;
  displayedColumns: string[] = ['select','EmpId', 'FirstName', 'LastName', 'FullName','Image','Department','Tagging','Edit','Delete'];
  constructor(private employee : EmployeeService,public dialog: MatDialog, private notificationService : NotificationService) { }

  ngOnInit(): void {
    this.isMultipleDelete = true;
    this.employee.getAllStudent().subscribe(response=>{
      debugger
      this.employeeList = response;
      this.employeeList.forEach((item:any) => {
        item.Image = 'data:image/jpg;base64,' + item.Image;
      })
      console.log(this.employeeList);
      this.employeeList  = new MatTableDataSource<employee>(this.employeeList);
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
  ngAfterViewInit() {
    this.employeeList.paginator = this.paginator;
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
  deleteRecord(){
    this.notificationService.confirmation("it will be gone forever", () => {
      this.notificationService.success("confirm oked");
    },
    'Are you sure?',
     ()  => {
      this.notificationService.error("confirm canceled");
    });
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.employeeList.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    debugger;
    this.isAllSelected() ?
      this.selection.clear() :
      this.employeeList.data.forEach((row:any) => this.selection.select(row));
      this.isAllSelected() ? this.isMultipleDelete = false :   this.isMultipleDelete = true;
  }
  
}
