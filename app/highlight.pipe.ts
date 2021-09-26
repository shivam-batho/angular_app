import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){}
  transform(value: string, city: string): any {
    return this.sanitizer.bypassSecurityTrustHtml('<b style="background-color:red"> City Name is: ' + city + '</b>');
  }

}
