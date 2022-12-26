import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesSetupComponent } from './fees-setup.component';

describe('FeesSetupComponent', () => {
  let component: FeesSetupComponent;
  let fixture: ComponentFixture<FeesSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeesSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
