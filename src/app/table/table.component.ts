import { Component,Input,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() myinput:any;
  

constructor(private _dataservice:DataService){}
data:any=this._dataservice.student;
}



