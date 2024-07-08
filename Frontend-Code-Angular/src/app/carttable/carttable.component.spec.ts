import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarttableComponent } from './carttable.component';

describe('CarttableComponent', () => {
  let component: CarttableComponent;
  let fixture: ComponentFixture<CarttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarttableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
