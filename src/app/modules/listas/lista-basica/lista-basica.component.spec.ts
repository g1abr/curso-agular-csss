import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBasicaComponent } from './lista-basica.component';

describe('ListaBasicaComponent', () => {
  let component: ListaBasicaComponent;
  let fixture: ComponentFixture<ListaBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBasicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
