import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id!: string | null;


  constructor(private route: ActivatedRoute) {
    
    if (this.route.parent) {
      this.route.parent.params.subscribe(params => {
        this.route.parent?.paramMap.subscribe(params => {
          let id = params.get('id')
          console.log("id: " + id)
        })
      }); 
    }


  }

  ngOnInit(): void {
  }

}


