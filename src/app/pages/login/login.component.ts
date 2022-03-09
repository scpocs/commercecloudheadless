import { Component, OnInit } from '@angular/core';
import { SeducService } from 'src/app/service/seduc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(public service: SeducService) {
    this.service.loggedIn = false;
  }

  ngOnInit(): void {
  }

  selectUser(e:any) {
    // console.log(e.target.value);
    this.service.selectUserById(e.target.value);
  }

}
