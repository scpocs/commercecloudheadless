import { Component, OnInit } from '@angular/core';


import { ConfirmDialogService } from '../../core/services/confirm-dialog.service';

import { dialogOpenCloseAnimation } from '../../core/animations';
import { MytranslatorService } from 'src/app/core/services';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  animations: [dialogOpenCloseAnimation]
})
export class ConfirmDialogComponent implements OnInit {

  showConfirmDialog: boolean = false;

  icon:string = "assets/images/edit-2.svg";
  title:string = '';
  text:string = '';

  confirmLabel:string = '';
  cancelLabel:string = '';

  confirmCallback:Function = () => {};
  cancelCallback:Function = () => {};

  constructor(private confirmDialogService:ConfirmDialogService, private mytranslatorService: MytranslatorService) { }

  ngOnInit(): void {

    this.confirmLabel = 'Confirmar';
    this.cancelLabel = 'Cancelar';

    this.confirmDialogService.showConfirmDialogEvent.subscribe(
      (data:{ icon:string, title:string, text:string, confirmLabel?:string, cancelLabel?:string, confirm:Function, cancel:Function }) => {


        if(!this.showConfirmDialog){

          this.icon = !!data.icon ? data.icon : this.icon;
          this.title = data.title;
          this.text = data.text;

          this.confirmLabel = !!data.confirmLabel ? data.confirmLabel : this.confirmLabel;
          this.cancelLabel = !!data.cancelLabel ? data.cancelLabel : this.cancelLabel;
          
          this.confirmCallback = data.confirm;
          this.cancelCallback = !!data.cancel ? data.cancel : this.cancelCallback;

          this.showConfirmDialog = true;
  

        }

      }
    );

  }

  onConfirm(){

    this.confirmCallback();
    this.resetValues();


  }

  onCancel(){

    this.cancelCallback();
    this.resetValues();

  }

  resetValues(){

    this.showConfirmDialog = false;

    this.icon = "assets/images/edit-2.svg";
    this.title = '';
    this.text = '';

    this.confirmLabel = this.mytranslatorService.getTranslator('bundle.label.confirm');
    this.cancelLabel = this.mytranslatorService.getTranslator('bundle.label.cancel');
  

    this.confirmCallback = () => {};
    this.cancelCallback = () => {};

  }

}
