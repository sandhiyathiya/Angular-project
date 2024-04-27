import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  //formData={
    //   fname:"",
    //   lname:"",
    //   };
    //   onSubmit(myForm:NgForm){
    // console.log(myForm.value);
    //   
    // myobs$=new Observable<string>(obs=>{
    //   console.log("start Observable");
    //   obs.next("100");
    //   obs.error("200")
    //   obs.next("300");
    //   setTimeout(() => {
    //         obs.next("400")
    //   }, 1000);
    //   console.log("end observable")
    // })
    // a=this.myobs$.subscribe(sub=>{
    //     console.log(sub);
    //   },
    //   (error)=>{
    //     console.log("error",error);
    //   },
    //   ()=>{
    //     console.log("completed");
    //   }
    // )
    // data(){
    //   this.myobs$;
    // }
    }
    

