///child of KegListComponent

import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <li><h3>{{ keg.name }}</h3></li>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
