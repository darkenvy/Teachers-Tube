import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'TimeForm'})
export class TimeForm implements PipeTransform {
  transform(value: number, args: string[]): any {
    if (!value) return value;
    let hour = Math.floor(value / 3600),
        min = Math.floor(value / 60),
        sec = (value % 60);
    let format = int => {return int < 10 ? '0' + int : int}
    let hideHour = int => {return hour > 0 ? format(hour) + ':' : ''}
    return hideHour(hour) + format(min) + ":" + format(sec)
  }
}