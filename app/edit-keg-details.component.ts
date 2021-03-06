import {Component} from 'angular2/core';
import {Keg} from './keg.model';


@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <h3>Edit Keg Details</h3>
    <input [(ngModel)]="keg.brewery" class="col-sm-8 input-lg keg-form"/>
    <input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-form"/>
    <input [(ngModel)]=keg.abv class="col-sm-8 input-lg keg-form"/>
    <input [(ngModel)]=keg.price class="col-sm-8 input-lg keg-form"/>
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
