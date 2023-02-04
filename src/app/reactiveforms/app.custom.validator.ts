import { AbstractControl } from "@angular/forms";

export class CustomValidator {
   // if value is valid then the method will return null
   // else a JSON object which is
   // ValidationErrors as Key:Value pair
   // thats why the return type is any
   static priceGreaterThan2000(ctrl:AbstractControl): any {
      let value = parseInt(ctrl.value);
      if(value > 2000)
        return null;
      else
        return {
           invalidPrice:true
        };
   }
}
