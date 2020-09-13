import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddeliveryComponent } from './finddelivery.component';

describe('FinddeliveryComponent', () => {
  let component: FinddeliveryComponent;
  let fixture: ComponentFixture<FinddeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinddeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinddeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
