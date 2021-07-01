import { Component, Input, OnInit } from '@angular/core';
import { ListServices } from '../list/list.services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ListServices]
})
export class AddComponent implements OnInit {
  list: string[]= [];
  //item : string= "";
   
  constructor(private listServices: ListServices) { }
  ngOnInit(): void {
   
  }
  getItems(item : any){
    this.list = this.listServices.getItems();
    this.listServices.toAdd(item); 
    console.log(this.list);
  }
  added(item : string){
    //this.listServices.toAdd(item);
  }
  onRemoved(removedItem: any){
    this.listServices.toDelete(removedItem);
   // console.log(removedItem);
  }

}
