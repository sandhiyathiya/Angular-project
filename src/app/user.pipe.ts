import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  
  // value?:'string'

  // transform(value: any, ...args: unknown[]): unknown{
    

  //  this.value=value.split("").reverse().join("");
   
  //  return this.value;

  gender?:"string"
  transform(value: any,gender:unknown){
     

    if(gender="female")
    {
      return'Ms.'+value;
    }
    else if(gender="male"){
      return 'Mr.'+value;
    }else 
    return value;
  }
}



