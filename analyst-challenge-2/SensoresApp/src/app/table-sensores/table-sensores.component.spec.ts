import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSensoresComponent } from './table-sensores.component';

describe('TableSensoresComponent', () => {
  let component: TableSensoresComponent;
  let fixture: ComponentFixture<TableSensoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSensoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSensoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
