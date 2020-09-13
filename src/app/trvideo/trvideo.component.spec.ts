import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrvideoComponent } from './trvideo.component';

describe('TrvideoComponent', () => {
  let component: TrvideoComponent;
  let fixture: ComponentFixture<TrvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
