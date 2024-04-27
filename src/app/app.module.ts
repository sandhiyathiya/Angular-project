import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { FileService } from './file.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import {HttpClientModule, } from '@angular/common/http';
import { UserPipe } from './user.pipe';
import { TodoComponent } from './todo/todo.component';
import { CrudComponent } from './crud/crud.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
     NavComponent,
     FormComponent,
     AboutComponent,
      TableComponent,
       ListComponent, 
       RegistrationComponent,
       UserPipe,
       TodoComponent,
       CrudComponent,
       WeatherComponent, 
  
        ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   ReactiveFormsModule,
   HttpClientModule
  ],
  providers: [DataService,FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }


