import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunication',
  templateUrl: './comunication.component.html',
  styleUrls: ['./comunication.component.scss']
})
export class ComunicationComponent implements OnInit {

  items = [
    {
      title: "Material escolar disponível",
      icon: "fa-book",
      text: "O kit é gratuito e inclui materiais como mochila, estojo ecológico, lápis, borracha, régua, canetas, cadernos e esqueeze para a realização diária das atividades pedagógicas.A entrega para as escolas será feita pela Secretaria Municipal de Educação, nas escolas, a partir de fevereiro.",
      date: "10/01/2022",
    },
    {
      title: "Uniforme disponíveis para retirada na escola",
      icon: "fa-user",
      text: "O auxílio para a aquisição de material e uniforme escolar da rede municipal é disponibilizado por meio...",
      date: "18/02/2022",
    },
    {
      title: "Prazo para matricula esta acabando",
      icon: "fa-calendar",
      text: "Prazo para renovação de matrículas na rede pública está terminando ... Para alunos veteranos, o prazo para que pais ou responsáveis, ...",
      date: "22/02/2022",
    }
  ]




  constructor() { }

  ngOnInit(): void {
  }

}
