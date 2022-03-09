import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-highlight',
  templateUrl: './dash-highlight.component.html',
  styleUrls: ['./dash-highlight.component.scss']
})
export class DashHighlightComponent implements OnInit {

  @Input() iconClass: string | undefined;
  @Input() title: string | undefined;
  @Input() btnLabel: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
