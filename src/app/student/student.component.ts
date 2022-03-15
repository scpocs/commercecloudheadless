import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SeducService } from '../service/seduc.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  // student: any;

  formDisabled = true;
  
  items: MenuItem[] = [

    { label: 'Inicio', icon: 'fa fa-home', routerLink: ['home'] },
    { label: 'Calendario', icon: 'fa fa-calendar', routerLink: ['calendario']},
    { label: 'Biblioteca', icon: 'fa fa-book', routerLink: ['biblioteca']},
    { label: 'Disciplinas extracurriculares', icon: 'fa fa-download', routerLink: ['disciplinas']},
    { label: 'Notas', icon: 'fa fa-check-square-o', routerLink: ['notas']},

  ];



  constructor(private route: ActivatedRoute, public service: SeducService, private router: Router) {

    if (this.route.parent) {
      this.route.parent.params.subscribe(params => {
        this.route.parent?.paramMap.subscribe(params => {
          let id = params.get('id')
          this.service.student = service.getDependentById(id);
        })
      });
    }
  }




  ngOnInit() {

  }

}
