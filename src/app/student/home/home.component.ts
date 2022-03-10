import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeducService } from 'src/app/service/seduc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id!: string | null;

  constructor(private route: ActivatedRoute, public service: SeducService) {
    
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

}


