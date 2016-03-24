import {Component, EventEmitter} from 'angular2/core';
import {KegListComponent} from './keg-list.component';
import {Keg} from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
       <h1>Tap Room</h1>
       <keg-list [kegList]="kegs"
       (onKegSelect)="kegWasSelected($event)">
       </keg-list>
     <div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Lagunitas", "IPA", "IPA", 7, 5, 0),
      new Keg("Russian River", "Pliny the Elder", "DIPA", 8, 6, 1)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
