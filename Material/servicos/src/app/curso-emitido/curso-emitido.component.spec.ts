import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoEmitidoComponent } from './curso-emitido.component';

describe('CursoEmitidoComponent', () => {
  let component: CursoEmitidoComponent;
  let fixture: ComponentFixture<CursoEmitidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoEmitidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoEmitidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
