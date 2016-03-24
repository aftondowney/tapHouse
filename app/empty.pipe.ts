import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: 'empty',
  pure: false
})
export class EmptyPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredEmptySate = args[0];
    if(desiredEmptySate === "empty") {
      return input.filter((keg) => {
        return task.done;
      });
    } else if(desiredEmptySate === "notEmpty") {
      return input.filter((keg) => {
        return !keg.done;
      });
    } else {
      return input;
    }
  }
}
