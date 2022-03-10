import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SeducService } from '../service/seduc.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {



  items: MenuItem[] = [
    
    { label: 'Inicio', icon: 'fa fa-home', routerLink: ['home'] },
    { label: 'Estudantes', icon: 'fa fa-users', routerLink: ['students'] },
    { label: 'Calendario', icon: 'fa fa-calendar' },
    { label: 'Biblioteca', icon: 'fa fa-book' },
    { label: 'Downloads', icon: 'fa fa-download' },
    { label: 'Notas', icon: 'fa fa-check-square-o' },
    { label: 'Mensagens', icon: 'fa fa-envelope-o' },

  ];

  constructor(private route: ActivatedRoute, public service: SeducService) {

    // if (this.route.parent) {
    //   this.route.parent.params.subscribe(params => {
    //     this.route.parent?.paramMap.subscribe(params => {
    //       let id = params.get('id')
    //       this.student = service.getDependentById(id);
    //     })
    //   });
    // }
  }

  ngOnInit(): void {
  }

}
