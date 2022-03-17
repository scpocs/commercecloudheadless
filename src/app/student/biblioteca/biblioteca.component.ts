import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {

  items = [
    {
      title: "Tecnologia e Educação: passado, presente e o que está por vir",
      icon:"fa-download",
      text:"O livro Tecnologias e Educação: passado, presente e o que está por vir que celebra os 35 anos de existência do Núcleo de Informática Aplicada...",
      date:"22/02/2022",
    },
    {
      title: "ABInv Aprendizagem Baseada na Investigação",
      icon:"fa-download",
      text:"Este livro reflete resultados do projeto de pesquisa “O Laptop Educacional e a Educação Baseada na Investigação: do estudar fatos científicos para o fazer ciência”, ...",
      date:"22/02/2022",
    },
    {
      title: "Codesign de Redes Digitais",
      icon:"fa-download",
      text:"O uso de computadores assume um papel cada vez mais relevante em nossas vidas, seja na forma como interagimos em sociedade, no acesso a serviços...",
      date:"22/02/2022",
    },
    {
      title: "XO na escola: construção compartilhada de conhecimento – lições aprendidas",
      icon:"fa-download",
      text:"XO na escola: construção compartilhada de conhecimento – lições aprendidas",
      date:"22/02/2022",
    },
    {
      title: "Tecnologias e Mídias Interativas na Escola (TIME)",
      icon:"fa-download",
      text:"Encontra-se  neste livro uma profícua discussão sobre o uso de tecnologias e mídias na escola levada a cabo por professoras do ensino fundamental I e...",
      date:"22/02/2022",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
