import { Component, OnInit } from '@angular/core';
import { SeducService } from 'src/app/service/seduc.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {


  constructor(public service: SeducService) { }

  ngOnInit(): void {
  }



}
