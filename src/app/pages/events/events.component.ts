import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  items = [
    {
      title: "Conversação em Italiano - 2022.1",
      icon: "fa-certificate",
      text: "O curso de Conversação em Italiano trabalha a língua e cultura italianas, tendo como objetivo integrar os estudantes do curso de Italiano do Centro de Línguas do IMPARH em seu contexto comunicativo e cultural.O curso é voltado para os alunos dos primeiros semestres do curso de Italiano do Centro de Línguas do IMPARH ou qualquer interessado que deseje revisar a gramática da língua em estudo.Carga horária: 50h/ a.",
      date: "11/02/2022",
    },
    {
      title: "Curso de Conversação em Alemão - 2022.1",
      icon: "fa-certificate",
      text: "O curso de Conversação em Alemão trabalha a língua e a cultura germânica, tendo como objetivo integrar os estudantes do curso de Alemão do Centro de Línguas do IMPARH em seu contexto comunicativo e cultural. O curso é voltado para os alunos dos primeiros semestres do curso de Alemão do Centro de Línguas do IMPARH ou qualquer interessado que deseje revisar a gramática da língua em estudo. Carga horária: 50h/a.",
      date: "05/02/2022",
    },
    {
      title: "Cursos de Idiomas",
      icon: "fa-certificate",
      text: "O Centro de Línguas do Imparh oferece cursos em sete idiomas: Português, Inglês, Espanhol, Italiano, Francês, Alemão e Japonês para a comunidade. Ao longo do curso, os alunos matriculados pagam uma taxa por semestre. Os cursos de línguas estrangeiras do Imparh têm a duração de três anos e meio. Já o curso de Português dura dois anos e meio.",
      date: "29/01/2022",
    },
    {
      title: "Plantão Gramatical",
      icon: "fa-certificate",
      text: "Qual é a grafia correta de uma palavra? Qual é a regência de determinado substantivo? Como se conjuga tal verbo? Essas e outras questões são respondidas com correção e segurança por uma equipe de especialistas e de forma gratuita. Há 35 anos em atividade, o Plantão Gramatical tornou-se referência nacional. Esclarecimentos quanto a fonética, semântica, crase, pontuação, conhecimentos gerais e outras regras do português são respondidos diariamente pelos professores que trabalham no serviço.",
      date: "22/01/2022",
    },
    {
      title: "Solicitação de 2ª Chamada da Segunda Prova do Centro de Línguas do Imparh",
      icon: "fa-certificate",
      text: "O aluno do Centro de Línguas do Imparh que precisar fazer a segunda chamada da segunda prova (curso de português) deve, no período de 8 a 12 de janeiro de 2022, fazer a solicitação e comparecer à Secretaria Escolar do Centro de Línguas.",
      date: "05/01/2022",
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
