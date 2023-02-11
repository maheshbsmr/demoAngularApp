import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateDepartmentComponent } from './allocate-department.component';

describe('AllocateDepartmentComponent', () => {
  let component: AllocateDepartmentComponent;
  let fixture: ComponentFixture<AllocateDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocateDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocateDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
