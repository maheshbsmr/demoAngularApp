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
  selector: 'app-time-setup',
  templateUrl: './time-setup.component.html',
  styleUrls: ['./time-setup.component.css']
})

export class TimeSetupComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Received','action'];
  dataSource = ELEMENT_DATA;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  disableSelect = new FormControl(false);
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
