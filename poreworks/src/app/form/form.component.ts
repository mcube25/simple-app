import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  submit(login){
    console.log('form submitted')
  }

}
//routing is essentially uused for navigating a website or web application
//in angular routing plays a major role, single pab\ge applications
//like angular load once and new features are just mere additions to the user interface
//spa's are much faster and give a desktop like feel to the application and fast all this achieved with the aid of routing
// routing helps angular to configure the route and the component that needs to be displayed
