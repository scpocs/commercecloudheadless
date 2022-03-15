import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.scss']
})
export class DisciplinasComponent implements OnInit {

  count = 0;

  disciplinas = [
    {
      title: "Matematica",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-star",
      iconColor: "text-white",
      selected: false,
      textColor: "text-white",
    },
    {
      title: "Programação",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-star",
      iconColor: "text-white",
      selected: false,
      textColor: "text-white",
    },
    {
      title: "Musica",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-star",
      iconColor: "text-white",
      selected: false,
      textColor: "text-white",
    },
    {
      title: "Natação",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-star",
      iconColor: "text-white",
      selected: false,
      textColor: "text-white",
    },
    {
      title: "Dança",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-star",
      iconColor: "text-white",
      selected: false,
      textColor: "text-white",
    },
    {
      title: "Teatro",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-star",
      iconColor: "text-white",
      selected: false,
      textColor: "text-white",
    },
    {
      title: "Culinária",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-star",
      iconColor: "text-white",
      selected: false,
      textColor: "text-white",
    },
    {
      title: "Circo",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-star",
      iconColor: "text-white",
      selected: false,
      textColor: "text-white",
    },
    {
      title: "Robótica",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-star",
      iconColor: "text-white",
      selected: false,
      textColor: "text-white",
    },
  ]



  constructor() { }

  ngOnInit(): void {
  }

  toggle(item: any) {

    if (this.count < 4) {
      item.selected = !item.selected;
  
      if (item.selected) {
        this.count++;
      } else {
        this.count--;
      }

    }

  }

}
