import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  location: string = '';
  weather: any;
  constructor(private service: DataService) { }

  getWeather() {
    this.service.getWeather(this.location).subscribe((response) => { 
      this.weather = response; 
      console.log(this.weather);
    });
  }
}



// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';

// @Component({
//   selector: 'app-weather',
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.css']
// })
// export class WeatherComponent implements OnInit {
//   weather: any;

//   constructor(private service: DataService) { }

//   ngOnInit(): void {
//     // Initialize location here if needed
//   }

//   getWeather(location: string) {
//     this.service.getWeather(location).subscribe((response) => { 
//       this.weather = response; 
//       console.log(this.weather);
//     });
//   }
// }




// import { Component,OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { DataService } from '../data.service';

// @Component({
//   selector: 'app-weather',
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.css']
// })
// export class WeatherComponent implements OnInit{
  
// weather : any;
//     constructor(private Service: DataService) { }
// ngOnInit(): void {}
  
//   getweather(location:string) {
//      this.Service.getweather(location).subscribe((response) => { 
//       this.weather = response; 
//       console.log(this.weather);
//     });

//   }


// }
