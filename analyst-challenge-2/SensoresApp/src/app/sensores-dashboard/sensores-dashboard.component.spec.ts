import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoresDashboardComponent } from './sensores-dashboard.component';

describe('SensoresDashboardComponent', () => {
  let component: SensoresDashboardComponent;
  let fixture: ComponentFixture<SensoresDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensoresDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensoresDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
