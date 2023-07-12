import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContactoComponent } from './lista-contacto.component';

describe('ListaContactoComponent', () => {
  let component: ListaContactoComponent;
  let fixture: ComponentFixture<ListaContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
