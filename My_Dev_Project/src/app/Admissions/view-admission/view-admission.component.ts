import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-admission',
  templateUrl: './view-admission.component.html',
  styleUrls: ['./view-admission.component.css']
})
export class ViewAdmissionComponent implements OnInit {

  studentList:student[];
  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
    this.getAllstudents();
  }
 
   getAllstudents(){
    this.studentService.getAllStudent().subscribe(item=>{
      this.studentList = item;
      console.log(this.studentList);
    })
   }
}
