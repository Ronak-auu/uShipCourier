import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuvideoComponent } from './cuvideo.component';

describe('CuvideoComponent', () => {
  let component: CuvideoComponent;
  let fixture: ComponentFixture<CuvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
