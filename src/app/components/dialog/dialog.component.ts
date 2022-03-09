import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { fadeAnimation, dialogOpenCloseAnimation } from '../../core/animations';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [fadeAnimation, dialogOpenCloseAnimation]
})
export class DialogComponent implements OnInit {

  @Input()
  closable: boolean = true;

  @Input()
  visible: boolean = false;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter();

  contentVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  toggleVisible(){

    this.visible = !this.visible;

    this.visibleChange.emit(this.visible);

  }


  hide(){

    this.contentVisible = false;

  }

  @HostListener('window:keyup.escape', ['$event'])
  handleEscapePress(){

    if(this.closable){

      this.hide();

    }

  }
  

  getMaxZIndex() {

    return Array.from(document.querySelectorAll('body *'))
                .map(a => parseFloat(window.getComputedStyle(a).zIndex))
                .filter(a => !isNaN(a))
                .sort((a, b) => a - b)
                .pop();
  }

  onContainerAnimationEnd(){

    setTimeout(() => {

      if(this.visible){

        this.contentVisible = true;

      }

    }, 100);

  }

  onContentAnimationEnd(){

    if(!this.contentVisible){

      this.toggleVisible();

    }

  }



}
