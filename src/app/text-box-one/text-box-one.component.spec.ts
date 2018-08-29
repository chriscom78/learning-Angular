import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxOneComponent } from './text-box-one.component';

describe('TextBoxOneComponent', () => {
  let component: TextBoxOneComponent;
  let fixture: ComponentFixture<TextBoxOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
