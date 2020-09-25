import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesesListComponent } from './theses-list.component';

describe('ThesesListComponent', () => {
  let component: ThesesListComponent;
  let fixture: ComponentFixture<ThesesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThesesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
