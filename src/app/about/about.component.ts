import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  app:any
   constructor(private dataservice:DataService){} 
   value:any
   recieverdata(msg:any){
     this.value=msg;
    }
    getvalue(){ 
       this.dataservice.getvalue().subscribe((response)=>{
        this.app=response;
   })
}
  }

