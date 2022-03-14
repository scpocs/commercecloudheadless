import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common'
@Injectable({
  providedIn: 'root',
})
export class SeducService {

  loggedIn = true;
  userMenu = false;

  selectedDocument: any;
  student: any;


  messagesList:any = [

  ]

  users = [
    {
      id: 10801,
      name: "Gisele dos Santos",
      email: "Gisele@gmail.com",
      phone: "(85) 9999-9999",
      img: "gisele.jpg",
      documents: [
        { id: 108011, name: "Identidade", status: "pending" }
      ],
      dependents: [
        {
          id: 10802,
          name: "Mario dos Santos",
          sexo: "Masculino",
          idade: "5 anos",
          email: "Mario@gmail.com",
          telefone: "(85) 9999-9999",
          img: "mario.jpg",
          status: "not-enrolled",
          documents: [
            { id: 10802, name: "Histórico Escolar", status: "pending" }
          ],
        },
        {
          id: 10803,
          name: "Marcela dos Santos",
          sexo: "Feminino",
          idade: "7 anos",
          email: "Marcela@gmail.com",
          telefone: "(85) 9999-9999",
          img: "marcela.jpg",
          status: "not-enrolled",
          documents: [
            { id: 10803, name: "Histórico Escolar", status: "pending" }
          ],
        },
        {
          id: 10804,
          name: "Mariana dos Santos",
          sexo: "Feminino",
          idade: "14 anos",
          email: "Mariana@gmail.com",
          telefone: "(85) 9999-9999",
          img: "mariana.jpg",
          status: "enrolled",
          documents: [
            { id: 10804, name: "Histórico Escolar", status: "pending" }
          ],
        },
      ]
    },
    {
      id: 10901,
      name: "Alice Machado",
      email: "Alice@gmail.com",
      phone: "(85) 9999-9999",
      img: "alice.jpg",
      documents: [
        { id: 109011, name: "Comprovante Endereço", status: "pending" }
      ],
      dependents: [
        {
          id: 10902,
          name: "Lucas Machado",
          sexo: "Masculino",
          idade: "16 anos",
          email: "Lucas@gmail.com",
          telefone: "(85) 9999-9999",
          img: "lucas.jpg",
          status: "not-enrolled",
          documents: [
            { id: 109012, name: "Identidade", status: "pending" }
          ],
        },
        {
          id: 10903,
          name: "Laura Machado",
          sexo: "Feminino",
          idade: "9 anos",
          email: "Laura@gmail.com",
          telefone: "(85) 9999-9999",
          img: "laura.jpg",
          status: "not-enrolled",
          documents: [
            { id: 109013, name: "Histórico Escolar", status: "pending" }
          ],
        },
      ]
    }
  ]

  user = this.users[0]





  startMenu = [
    {
      title: "Eventos",
      routerLink: "/seguro",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-calendar",
      iconColor: "text-white",
      textColor: "text-white",
    },
    {
      title: "Comunicação",
      routerLink: "/compra",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-newspaper-o",
      iconColor: "text-white",
      textColor: "text-white",
    },
    {
      title: "Notícias",
      routerLink: "/planos",
      bgColor: "blue-500",
      description: "",
      icon: "fa fa-file-text-o",
      iconColor: "text-white",
      textColor: "text-white",
    },
  ]



  constructor(private http: HttpClient, private router: Router, private messages: MessageService, private location: Location) {
    this.selectedDocument = this, this.users[0].dependents[0].documents[0];
  }

  addMessage(title: any, message: any) {
    this.messagesList.push({
      time: new Date(),
      title: title,
      message: message,
    })
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/login']);
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

  selectDocument(item: any) {
    this.selectedDocument = item;
    this.router.navigate(['/document']);
  }

  getDependentById(id: any) {
    let dependent = this.user.dependents.find(dependent => dependent.id == id);
    return dependent ? dependent : null;

  }

  selectUserById(id: any) {
    let user = this.users.find(user => user.id == id);

    if (user) {
      this.user = user;
    }
  }


  getPendingDocuments() {
    let list: any = [];

    this.user.documents.forEach(document => {
      if (document.status == "pending") {
        list.push({ id: document.id, name: document.name, user: this.user });
      }
    });

    this.user.dependents.forEach(dependent => {
      dependent.documents.forEach(document => {
        if (document.status == "pending") {
          list.push({ id: document.id, name: document.name, user: dependent });
        }
      });
    });

    return list;
  }

  enviar() {
    this.uploadDocument(this.selectedDocument.id, this.selectedDocument.name + " - " + this.selectedDocument.user.name)
    // this.router.navigate(['/start']);

    this.location.back()
  }

  uploadDocument(id: any, title: any) {

    this.addMessage("Documento enviado", title);

    this.messages.add({ severity: 'success', summary: 'Upload de arquivo', detail: title });

    this.user.documents.forEach(document => {
      if (document.id == id) {
        document.status = "ok"
      }
    });

    this.user.dependents.forEach(dependent => {
      dependent.documents.forEach(document => {
        if (document.id == id) {
          document.status = "ok"
        }
      });
    });

  }





}
