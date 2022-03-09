import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign value true when colled toglleVisible()', () => {
    component.toggleVisible();

    expect(component.visible).toBeTrue();
  });

  it('should assign value false when colled hide()', () => {
    component.hide();

    expect(component.contentVisible).not.toBeTrue();
  });

  it('should valid if closeable is true when colled handleEscapePress()', () => {
    component.handleEscapePress();

    expect(component.contentVisible).not.toBeTrue();
  });

  it('should not invoke hide() when colled handleEscapePress()', () => {
    spyOn(component, 'hide');
    component.closable = false;

    component.handleEscapePress();

    expect(component.hide).not.toHaveBeenCalled();
  });

  it('should invoke toggleVisible when colled onContentAnimationEnd()', () => {
    spyOn(component, 'toggleVisible');

    component.onContentAnimationEnd();

    expect(component.toggleVisible).toHaveBeenCalled();
  });

  it('should not invoke toggleVisible when colled onContentAnimationEnd()', () => {
    spyOn(component, 'toggleVisible');

    component.contentVisible = true;
    component.onContentAnimationEnd();

    expect(component.toggleVisible).not.toHaveBeenCalled();
  });
});
