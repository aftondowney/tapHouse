import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Add a new keg:</h3>
    <input placeholder="Brewery" class="col-sm-8 input-lg" #newBrewery>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Type" class="col-sm-8 input-lg" #newType>
    <input placeholder="Abv" class="col-sm-8 input-lg" #newAbv>
    <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
    <button (click)="addKeg('newBrewery', 'newName', 'newType', newAbv, newPrice)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class newKegComponent {
  public onSubmitNewKeg: EventEmitter<String>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newBrewery: HTMLInputElement, newName: HTMLInputElement, newType: HTMLInputElement, newAbv: HTMLInputElement, newPrice: HTMLInputElement) {
    this.onSubmitNewKeg.emit(newBrewery.value, newName.value, newType.value, newAbv.value, newPrice.value);
    }
}
