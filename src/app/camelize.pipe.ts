import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelize'
})
export class CamelizePipe implements PipeTransform {

  transform(value: string, camelizeFirst:boolean=false):string {
    let words = value.split(/[\s]+|[\-]+/);
    let camelized = "";
    for(let i=0;i<words.length; i++){
      let w = words[i];
      camelized += i==0 && !camelizeFirst ? w.toLowerCase() : this.getTitleWord(w);
    }
    return camelized;
  }

  getTitleWord(word:string){
    return word.substr(0,1).toUpperCase()+word.substr(1);
  }

}
