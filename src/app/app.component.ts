import { Component, OnInit } from '@angular/core';
import { ListServices } from './list/list.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListServices]
})
export class AppComponent implements OnInit {

list: any[]=[];
  constructor(private listOfItems: ListServices){

  }
  ngOnInit(){
    this.list = this.listOfItems.getItems();
  }
}

