import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisAddComponent } from './thesis-add.component';

describe('ThesisAddComponent', () => {
  let component: ThesisAddComponent;
  let fixture: ComponentFixture<ThesisAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThesisAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
