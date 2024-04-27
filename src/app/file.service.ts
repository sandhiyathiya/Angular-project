import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  country =[      {no:1,country:"India"},      {no:2,country:"Uk"},      {no:3,country:"USA"},      {no:4,country:"Canada"},      {no:5,country:"Australia"},      {no:6,country:"newsland"},      {no:7,country:"Japan"},      {no:8,country:"Brazil"},      {no:9,country:"Srilanka"},      {no:10,country:"Italy"},      {no:12,country:"France"},      {no:13,country:"Israel"},      {no:14,country:"Nepal"},    ];

  formdata=[];
  constructor(){}
getstudents(){
  return this.formdata;
    }
}


