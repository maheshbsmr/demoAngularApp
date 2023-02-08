import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { map, Observable, startWith } from 'rxjs';
import {student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-fees-setup',
  templateUrl: './fees-setup.component.html',
  styleUrls: ['./fees-setup.component.css']
})
export class FeesSetupComponent implements OnInit {
  
  options: string[] = ['One', 'Two', 'Three'];
  feesType:any[]=[];
  studentList:student[];
  filterstdList:any[];
  filteredOptions: Observable<student[]>;
  myControl = new FormControl('');
  disableSelect = new FormControl(false);
  public std:student = new student()
  constructor(private studentService:StudentService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.feesType=[
      {'Id':1 , feesType:'Admission',disable:true},
      {'Id':2 , feesType:'Computer',disable:true},
      {'Id':3,  feesType:'Term',disable:true},
      {'Id':4 , feesType:'Lab',disable:true},
      {'Id':5 , feesType:'Bus',disable:true},
    ]

    this.studentService.getAllStudent().subscribe(response=>{
      debugger
      this.studentList = response;
      this.studentList.forEach(item => {
        item.image = 'data:image/jpg;base64,' + item.image;
      })
      console.log(this.studentList);
    })
  }
  private _filter(value: string): student[]{
    const filterValue = value.toLowerCase();
    return this.studentList.filter(option => option.StdId.toLowerCase().includes(filterValue));
  }
  changeFeesType(item:any,event:any){
    if(event.target.checked){
      let index =  this.feesType.indexOf(item.Id);
      item.disable = false;
      this.feesType[index]=item;
    }
    else{
      let index =  this.feesType.indexOf(item.Id);
      item.disable = true;
      this.feesType[index]=item;
    }
  
  }
  OnUidSelected(option: MatOption){
      debugger;
      this.filterstdList = this.studentList.filter(x => x.StdId == option.value);
      let stdObject = Object.assign({}, ...this.filterstdList);
      this.std = stdObject
      this.std.fullName = stdObject.FullName;
      this.std.Gender = stdObject.Gender;
      this.std.dateOfBirth = stdObject.DateOfBirth;
      this.std.mobileNumber = stdObject.MobileNumber;
      this.std.bloodGroup = stdObject.BloodGroup;
      this.std.address = stdObject.Address;

       let date = new Date();
       let beginYear = moment(date).format('dd/MM/yyy').toString()
       for(let i=0 ; i <= 4; i++){
        var newdate = new Date();
        var res = date.setFullYear(date.getFullYear() + i).toString();
       }
  }
}
