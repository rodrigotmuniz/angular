import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildPropertyComponent } from './view-child-property.component';

describe('ViewChildPropertyComponent', () => {
  let component: ViewChildPropertyComponent;
  let fixture: ComponentFixture<ViewChildPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
