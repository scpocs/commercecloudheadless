import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  items = [
    {
      title: "Histórico escolar 2021 - Nota geral: 9,0",
      icon: "fa-file-text-o",
      text: "Notas do período, com todas as matérias e faltas por matéria e notas de atividades extra curriculares.",
      date: "22/02/2022",
    },
    {
      title: "Histórico escolar 2020 - Nota geral: 8,5",
      icon: "fa-file-text-o",
      text: "Notas do período, com todas as matérias e faltas por matéria e notas de atividades extra curriculares.",
      date: "22/02/2022",
    },
    {
      title: "Histórico escolar 2019 - Nota geral: 9,2",
      icon: "fa-file-text-o",
      text: "Notas do período, com todas as matérias e faltas por matéria e notas de atividades extra curriculares.",
      date: "22/02/2022",
    },
    {
      title: "Histórico escolar 2018 - Nota geral: 7,5",
      icon: "fa-file-text-o",
      text: "Notas do período, com todas as matérias e faltas por matéria e notas de atividades extra curriculares.",
      date: "22/02/2022",
    },
    {
      title: "Histórico escolar 2017 - Nota geral: 9,1",
      icon: "fa-file-text-o",
      text: "Notas do período, com todas as matérias e faltas por matéria e notas de atividades extra curriculares.",
      date: "22/02/2022",
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
