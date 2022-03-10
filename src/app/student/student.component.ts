import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SeducService } from '../service/seduc.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  student: any;

  items: MenuItem[] = [

    { label: 'Inicio', icon: 'fa fa-home', routerLink: ['home'] },
    { label: 'Calendario', icon: 'fa fa-calendar' },
    { label: 'Biblioteca', icon: 'fa fa-book' },
    { label: 'Downloads', icon: 'fa fa-download' },
    { label: 'Notas', icon: 'fa fa-check-square-o' },

  ];

  constructor(private route: ActivatedRoute, public service: SeducService) {

    if (this.route.parent) {
      this.route.parent.params.subscribe(params => {
        this.route.parent?.paramMap.subscribe(params => {
          let id = params.get('id')
          this.student = service.getDependentById(id);
        })
      });
    }
  }



  ngOnInit() {

  }

}
