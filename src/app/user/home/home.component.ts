import { Component, OnInit } from '@angular/core';
import { SeducService } from 'src/app/service/seduc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public service: SeducService) { }

  ngOnInit(): void {
  }

}
