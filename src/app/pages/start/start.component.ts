import { Component, OnInit } from '@angular/core';
import { SeducService } from 'src/app/service/seduc.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {




  constructor(public service: SeducService) {
    this.service.loggedIn = true;
  }

  ngOnInit(): void {
  }

}
