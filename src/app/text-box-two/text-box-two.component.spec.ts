import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxTwoComponent } from './text-box-two.component';

describe('TextBoxTwoComponent', () => {
  let component: TextBoxTwoComponent;
  let fixture: ComponentFixture<TextBoxTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
