import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  api='https://jsonplaceholder.typicode.com/posts'
  url='https://jsonplaceholder.typicode.com/posts'
  // private apiUrl = 'https://api.openweathermap.org/data/2.5/weather.json';
 API="https://api-curd-3aa83-default-rtdb.firebaseio.com/data.json" 

 apiKey = 'de5845138c6d71215a1ca39430a920aa'
 apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather.json';

 constructor(private http: HttpClient) { }
 getWeather(location: string): Observable<any> {
  return this.http.get("this.apiurl");
}
   

   student=[ 
    {Name: "sandy", Id: 1, Email: "sandy@gmail.com", Password: 123,Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},    {Name: "sam", Id: 2, Email: "sam@gmail.com", Password: 321, Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"notpaid"},    {Name: "sanjai", Id: 3, Email: "sanjai@gmail.com", Password: 213,Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},    {Name: "sai", Id: 4, Email: "sai@gmail.com", Password: 132,Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},    {Name: "sri", Id: 5, Email: "sri@gmail.com", Password: 456,Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"notpaid"},    {Name:"saran",Id:"06",Email: "saran@gmail.com",Password:564,Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},    {Name:"sanju",Id:"07",Email: "sanju@gmail.com",Password:"546",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"notpaid"},    {Name:"saiju",Id:"08",Email: "saiju@gmail.com",Password:"654",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},    {Name:"ssss",Id:"09",Email: "ssss@gmail.com",Password:"655",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"notpaid"},    {Name:"aaaa",Id:"10",Email: "aaaa@gmail.com",Password:"656",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},    {Name:"nnnnn",Id:"11",Email:"nnnnn@gmail.com",Password:"657",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},    {Name:"mmmm",Id:"12",Email:"mmmm@gmail.com",Password:"658",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"notpaid"},    {Name:"ooooo",Id:"13",Email:"ooooo@gmail.com",Password:"659",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},    {Name:"ppppp",Id:"14",Email:"ppppp@gmail.com",Password:"660",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"notpaid"},   {Name:"qqqqq",Id:"15",Email:"qqqqq@gmail.com",Password:"661",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},   {Name:"rrrrr",Id:"16",Email:"rrrrr@gmail.com",Password:"662",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},   {Name:"ttttt",Id:"17",Email:"ttttt@gmail.com",Password:"663",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},   {Name:"uuuuu",Id:"18",Email:"uuuuu@gmail.com",Password:"664",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"notpaid"},   {Name:"vvvv",Id:"19",Email:"vvvvv@gmail.com",Password:"665",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},   {Name:"wwww",Id:"20",Email:"wwww@gmail.com",Password:"666",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"notpaid"},   {Name:"xxxx",Id:"21",Email:"xxxx@gmail.com",Password:"667",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"},   {Name:"yyyyy",Id:"22",Email:"yyyyy@gmail.com",Password:"668",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"notpaid"},   {Name:"zzzzz",Id:"23",Email:"zzzzz@gmail.com",Password:"669",Address:"no 106 muthumariamman koil street,singaperumal koil",fees:"paid"}, 
  ];
    
getdata():Observable<any>{

    return this.http.get(this.api);

  }
  getvalue():Observable<any>{

    return this.http.get(this.API);
  }
  update(user:any):Observable<any>{
    return this.http.post("https://api-curd-3aa83-default-rtdb.firebaseio.com/data.json",user);
  }
  putdata(user:any):Observable<any>{
      return this.http.put("https://api-curd-3aa83-default-rtdb.firebaseio.com/data.json/$(data.id)",user);
  }
  deletedata(user:any){
    return this.http.delete("https://api-curd-3aa83-default-rtdb.firebaseio.com/data.json/$(data.id)");
  }
  }