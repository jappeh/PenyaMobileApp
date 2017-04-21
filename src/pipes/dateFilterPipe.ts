/**
 * Created by Jasper on 21/04/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilterPipe'
})
export class DateFilterPipe implements PipeTransform {

  transform(games:any[],arg:string): any {
    if(games==null){
      return null;
    }
    if(arg=="future"){
      return games.filter(game=> new Date(game.date)>new Date());
    }
    if(arg=="past"){
      return games.filter(game=> new Date(game.date)<new Date());
    }
    return true;
  }
}
