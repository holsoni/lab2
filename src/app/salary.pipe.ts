import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {


  transform(value: number): string {
    let formattedValue: string = '';

    if (value >= 1000000000) {
      const billions = Math.floor(value / 1000000000);
      formattedValue += `${billions}B `;
      value -= billions * 1000000000;
    }

    if (value >= 1000000) {
      const millions = Math.floor(value / 1000000);
      formattedValue += `${millions}M `;
      value -= millions * 1000000;
    }

    if (value >= 1000) {
      const thousands = Math.floor(value / 1000);
      formattedValue += `${thousands}K `;
      value -= thousands * 1000;
    }


    return formattedValue;
  }

}
