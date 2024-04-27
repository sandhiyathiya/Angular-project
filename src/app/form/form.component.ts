import { Component ,OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { FileService } from '../file.service';
import { NgForm, Validators } from '@angular/forms';
import { FormControl,FormGroup ,FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  data:any=[];
myform:FormGroup |any;
constructor(private formbuilder:FormBuilder,private dataservice:DataService){}

ngOnInit(): void {
  this.myform= this.formbuilder.group({
  fname: ["",Validators.required],
  lname: '',
  email:['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
  })
}

onsubmit(myform:FormGroup){
  const fname=this.myform.get("fname").value;
  const lname=this.myform.get("lname").value;
  const email=this.myform.get("email").value;


  this.data.push({fname,lname,email})
  console.log(this.data.value)
   myform.reset();
  }
}



//country:any=this._fileservice.country;


//   msg:any;
//   show(){
//    this.msg="welcome"
//   }
//   value='true';
// constructor(private _fileservice:FileService){}

//   formdata={
//     Name:'',
//     Email:'',
//     password:'',
//     gender:"",
//     country:''
//   };

//   regform(){
//    this.regform= this._fileservice.getstudents;
//   }
  


