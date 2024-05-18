import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSoonComponent } from './svg-soon.component';

describe('SvgSoonComponent', () => {
  let component: SvgSoonComponent;
  let fixture: ComponentFixture<SvgSoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgSoonComponent]
    });
    fixture = TestBed.createComponent(SvgSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
