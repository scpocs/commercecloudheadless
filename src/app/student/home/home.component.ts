import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeducService } from 'src/app/service/seduc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  date!: Date;


  id!: string | null;

  constructor(private route: ActivatedRoute, public service: SeducService, private router: Router) {
    
    if (this.route.parent) {
      this.route.parent.params.subscribe(params => {
        this.route.parent?.paramMap.subscribe(params => {
          this.id = params.get('id')
        })
      }); 
    }
  }

  ngOnInit(): void {
  }

  matricular() {
    this.router.navigate(['/student', this.service.student.id, 'map']);
  }


}


