import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ConfirmDialogService } from 'src/app/core/services/confirm-dialog.service';

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let confirmDialogService: ConfirmDialogService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule, 
        FormsModule,
        ReactiveFormsModule, 
        TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
        })
      ],
      declarations: [ ConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    confirmDialogService = TestBed.inject(ConfirmDialogService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should confirm dialog on ngOnInit trigger emission when first called', () => {

    fixture.detectChanges();

    expect(component.showConfirmDialog).not.toBeNull();

    const data = {
      title: 'Title exemplo', 
      text: "Text exemplo", 
      confirm: function() {
          return 'Ok'
      }
    }

    confirmDialogService.showConfirmDialog(data)

    expect(component.showConfirmDialog).toBeTrue()

  });

  it('should init function when called onConfirm', ()=> {
     component.onConfirm();

      expect(component.confirmCallback).not.toBeUndefined()
  });

  it('should init function when called onCancel', ()=> {
    component.onCancel();

     expect(component.cancelCallback).not.toBeUndefined()
 });

});
