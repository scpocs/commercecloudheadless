import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeducService } from 'src/app/service/seduc.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  images = [
    {
      "previewImageSrc": "assets/escola1.jpg",
      "thumbnailImageSrc": "assets/escola1.jpg",
      // "alt": "Description for Image 1",
      // "title": "Title 1"
    },
    {
      "previewImageSrc": "assets/escola2.jpg",
      "thumbnailImageSrc": "assets/escola2.jpg",
    },
    {
      "previewImageSrc": "assets/escola3.jpg",
      "thumbnailImageSrc": "assets/escola3.jpg",
    },
    {
      "previewImageSrc": "assets/escola4.jpg",
      "thumbnailImageSrc": "assets/escola4.jpg",
    },
    {
      "previewImageSrc": "assets/escola5.jpg",
      "thumbnailImageSrc": "assets/escola5.jpg",
    },
  ]
  
  


  constructor(public service: SeducService, private router: Router) { }

  ngOnInit(): void {
  }

  selectSchool() {
    this.service.student.status = 'enrolled';
    this.router.navigate(['/student', this.service.student.id]);


  }

}
