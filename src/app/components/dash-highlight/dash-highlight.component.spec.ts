import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashHighlightComponent } from './dash-highlight.component';

describe('DashHighlightComponent', () => {
  let component: DashHighlightComponent;
  let fixture: ComponentFixture<DashHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashHighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
