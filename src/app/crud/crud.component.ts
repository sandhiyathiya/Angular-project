import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  app: any;
  data: any = [];
  myform: FormGroup |any;

  constructor(private formbuilder: FormBuilder, private dataservice: DataService) {}

  ngOnInit(): void {
    this.myform = this.formbuilder.group({
      fname: ["", Validators.required],
      lname: '',
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onsubmit(myform: FormGroup): void {
    const fname = this.myform.get("fname").value;
    const lname = this.myform.get("lname").value;
    const email = this.myform.get("email").value;

    this.data.push({ fname, lname, email });
    console.log(this.data);
    this.myform.reset();
  }

  getvalue(){
    this.dataservice.getvalue().subscribe((response) => {
      this.app = response;
    });
  }

  update(user: any){
    this.dataservice.update(user).subscribe((response) => {
      this.app = response;
    });
  }

  putdata(user: any) {
    this.dataservice.putdata(user).subscribe((response) => {
      this.app = response;
    });
  }

  deletedata(user: any) {
    this.dataservice.deletedata(user).subscribe((response) => {
      this.app = response;
    });
  }
}
