import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEndComponent } from './from-end.component';

describe('FromEndComponent', () => {
  let component: FromEndComponent;
  let fixture: ComponentFixture<FromEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
