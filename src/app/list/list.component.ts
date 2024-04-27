import { Component,Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  rescive:any
  @Output() recieve=new EventEmitter<string>()
  outputmsg = "I am a child component";
  constructor(private data:DataService){}
  senddata(){
     this.recieve.emit("sumit");
    }
  
  getdata(){
     this.data.getdata().subscribe((resp)=>{
 this.rescive=resp
   })
   
  }
  }



