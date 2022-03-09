import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-inputs',
  templateUrl: './card-inputs.component.html',
  styleUrls: ['./card-inputs.component.scss']
})


export class CardInputsComponent implements OnInit {

  @Input() iconClass: string | undefined;
  @Input() title: string | undefined;

  constructor() {


  }



  ngOnInit(): void {
  }

}
