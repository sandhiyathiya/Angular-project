import { Component,OnInit } from '@angular/core';
import { FormBuilder ,FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  data:any=[];
  
  myForm:FormGroup |any;
  constructor(private formbuilder:FormBuilder){}
  
  ngOnInit(): void {
    this.myForm= this.formbuilder.group({
    firstname: ["",Validators.required],
    lastname: ["",Validators.required],
    email:["",[Validators.required,Validators.email]],
    address: ["",Validators.required],
    password: ["",Validators.required],
    city: ["",Validators.required],
   
    state: ["",Validators.required],
    country: ["",Validators.required],
    gender: ["",Validators.required]
    })
  }
  onSubmit(myForm:FormGroup){
    if(this.myForm.valid){
    const firstname=this.myForm.get("firstname").value;
    const lastname=this.myForm.get("lastname").value;
    const email=this.myForm.get("email").value;
    const address=this.myForm.get("address").value;
    const password=this.myForm.get("password").value;
    const city=this.myForm.get("city").value;
    const state=this.myForm.get("state").value;
    const country=this.myForm.get("country").value;
    const gender=this.myForm.get("gender").value;
    
    this.data.push({firstname,lastname,email,address,password,city,state,country,gender});
    console.log(this.data.value);
    this.myForm.reset();
    }else{
    alert('Please fill in all required');
    }
  }


}
