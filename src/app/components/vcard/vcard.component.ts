import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vcard',
  templateUrl: './vcard.component.html',
  styleUrls: ['./vcard.component.scss']
})
export class VcardComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  icon!: string;
  @Input()
  description!: string;
  @Input()
  bgColor!: string;
  @Input()
  textColor!: string;
  @Input()
  iconColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
