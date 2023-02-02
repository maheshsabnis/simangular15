import {  Injectable } from "@angular/core";

@Injectable()
export class StringUtilities {

   changeCase(str:string, c:string):string{
      if(c === 'l' || c === "L")
        return str.toLowerCase();
      if(c === 'u' || c === "U")
        return str.toUpperCase();

      return str;
   }
}
