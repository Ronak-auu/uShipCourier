import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdelComponent } from './newdel.component';

describe('NewdelComponent', () => {
  let component: NewdelComponent;
  let fixture: ComponentFixture<NewdelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
