import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {


  
  // selected: boolean = false;
  focus: boolean = false;
  
  @Input() item: any | undefined;
  @Input() small: boolean = false;

  // @Input() children: any | undefined;
  // @Input() type: string = "input";
  // @Input() iconClass: string | undefined;
  // @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }


  

}
