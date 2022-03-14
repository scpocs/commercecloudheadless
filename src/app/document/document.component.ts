import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeducService } from '../service/seduc.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor(public service: SeducService, private router: Router) {
    this.service.loggedIn = true;
  }

  ngOnInit(): void {
  }



}
