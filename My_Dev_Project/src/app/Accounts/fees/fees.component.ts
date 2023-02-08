import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Received: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Admission', weight: 1.0079, symbol: 'H',Received: '1000'},
  {position: 2, name: 'Computer', weight: 4.0026, symbol: 'He',Received: '1000'},
  {position: 3, name: 'Term', weight: 6.941, symbol: 'Li',Received: '1000'},
  {position: 4, name: 'Bus', weight: 9.0122, symbol: 'Be',Received: '1000'},
  {position: 5, name: 'Lab', weight: 10.811, symbol: 'B',Received: '1000'},

];

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})

export class FeesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Received','action'];
  dataSource = ELEMENT_DATA;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  disableSelect = new FormControl(false);
  feesType:any[]=[];
  constructor() { }

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
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
