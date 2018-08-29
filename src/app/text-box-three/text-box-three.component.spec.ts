import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxThreeComponent } from './text-box-three.component';

describe('TextBoxThreeComponent', () => {
  let component: TextBoxThreeComponent;
  let fixture: ComponentFixture<TextBoxThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
