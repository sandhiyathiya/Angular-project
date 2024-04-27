import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { RegistrationComponent } from './registration/registration.component';
import { TodoComponent } from './todo/todo.component';
import { CrudComponent } from './crud/crud.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  { path:'nav' , component:NavComponent  }, 
   { path:'form', component:FormComponent  },   
    { path:'about' , component: AboutComponent }, 
     { path:'list' , component: ListComponent }, 
     { path:'table' , component: TableComponent },  
     { path:'registration' , component: RegistrationComponent }, 
     { path:'todo', component: TodoComponent } ,
     { path:'crud' , component: CrudComponent},
     { path:'weather' , component: WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
