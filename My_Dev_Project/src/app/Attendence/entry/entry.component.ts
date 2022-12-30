import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  time:any[];

  constructor() { }

  ngOnInit(): void {
  this.time =[
    {'Name':'Name1','time':'time'},
    {'Name':'Name1','time':'time'},
    {'Name':'Name1','time':'time'}, 
    {'Name':'Name1','time':'time'},
    {'Name':'Name1','time':'time'},
    {'Name':'Name1','time':'time'},
    {'Name':'Name1','time':'time'},
    {'Name':'Name1','time':'time'},   
    {'Name':'Name1','time':'time'},
    {'Name':'Name1','time':'time'},

  ]

  }

}
