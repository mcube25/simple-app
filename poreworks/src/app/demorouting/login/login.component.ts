import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submit(login){
    console.log('form submitted')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
