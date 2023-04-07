import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaaComponent } from './acercaa.component';

describe('AcercaaComponent', () => {
  let component: AcercaaComponent;
  let fixture: ComponentFixture<AcercaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
