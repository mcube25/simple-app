import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../records.service'

@Component({
  selector: 'app-textcomponent',
  templateUrl: './textcomponent.component.html',
  styleUrls: ['./textcomponent.component.css'],
  providers: [RecordsService]
})
export class TextcomponentComponent implements OnInit {

infoReceived1: string[] = [];
infoReceived2: string[] = [];
infoReceived3: string[] = [];
//add services using dependency injection
//create an object in the constructor to access the services
getInfoFromSErviceClass1(){
  this.infoReceived1 = this.rservice.getInfo1()
}
getInfoFromSErviceClass2(){
  this.infoReceived2 = this.rservice.getInfo2()
}
getInfoFromSErviceClass3(){
  this.infoReceived3 = this.rservice.getInfo3()
}

  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }
updateInfo(frm: any){
  this.rservice.addInfo(frm.value.location)
}
}
