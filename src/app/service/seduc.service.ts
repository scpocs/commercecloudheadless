import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeducService {

  loggedIn = true;
  userMenu = false;

  users = [
    {
      id: 10801,
      name: "Gisele dos Santos",
      img: "alice.jpg",
      documents: [
        { name: "Identidade", status: "pending" }
      ],
      dependents: [
        {
          id: 10802,
          name: "Mario dos Santos",
          img: "lucas.jpg",
          documents: [
            { name: "Histórico Escolar", status: "pending" }
          ],
        },
        {
          id: 10803,
          name: "Marcela dos Santos",
          img: "laura.jpg",
          documents: [
            { name: "Histórico Escolar", status: "pending" }
          ],
        },
      ]
    },
    {
      id: 10901,
      name: "Alice Machado",
      img: "alice.jpg",
      documents: [
        { name: "Comprovante Endereço", status: "pending" }
      ],
      dependents: [
        {
          id: 10902,
          name: "Lucas Machado",
          img: "lucas.jpg",
          documents: [
            { name: "Identidade", status: "pending" }
          ],
        },
        {
          id: 10903,
          name: "Laura Machado",
          img: "laura.jpg",
          documents: [
            { name: "Histórico Escolar", status: "pending" }
          ],
        },
      ]
    }
  ]

  user = this.users[0]

  



  startMenu = [
    {
      title: "Calendario",
      routerLink: "/seguro",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-rocket",
      iconColor: "text-white",
      textColor: "text-white",
    },
    {
      title: "Notas",
      routerLink: "/compra",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-money",
      iconColor: "text-white",
      textColor: "text-white",
    },
    {
      title: "Matricula",
      routerLink: "/manutencao",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-wrench",
      iconColor: "text-white",
      textColor: "text-white",
    },
    {
      title: "Comunidade",
      routerLink: "/planos",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-file-text-o",
      iconColor: "text-white",
      textColor: "text-white",
    },
  ]

  
  constructor(private http: HttpClient) {
  }

  getUsers() {
    let list: any = [];
    this.users.forEach(user => {
      list.push({
        value: user.id,
        label: user.name,
      })
    });
    return list;
  }

  selectUserById(id:any) {
    let user = this.users.find(user => user.id == id);

    if (user) {
      this.user = user;
    }
  }


  getPendingDocuments() {
    let list:any = [];

    this.user.documents.forEach(document => {
      if (document.status == "pending") {
        list.push({ name:document.name, user: this.user });
      }
    });
    
    this.user.dependents.forEach(dependent => {
      dependent.documents.forEach(document => {
        if (document.status == "pending") {
          list.push({ name: document.name, user: dependent });
        }
      });
    });

    return list;
  }





}
