import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pennyToDollar', })
export class PennyToDollarPipe implements PipeTransform {
  transform(value: number) {
    return value / 100;
  }
}
