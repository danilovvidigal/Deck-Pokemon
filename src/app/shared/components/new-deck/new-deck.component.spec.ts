import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeckComponent } from './new-deck.component';

describe('NewDeckComponent', () => {
  let component: NewDeckComponent;
  let fixture: ComponentFixture<NewDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDeckComponent]
    });
    fixture = TestBed.createComponent(NewDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
