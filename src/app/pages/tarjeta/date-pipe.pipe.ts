import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: Date): void {
     value.getDay().toLocaleString();
  }
  /* transform(value: Date): string {
     return value.getDay().toLocaleString();
  } */

}
