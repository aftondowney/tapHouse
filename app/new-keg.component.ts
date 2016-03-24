import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Add a new keg:</h3>
    <div class="col-sm-4">
      <input placeholder="Brewery" class="input-lg" type="text" #newBrewery><br>
      <input placeholder="Name" class="input-lg" type="text" #newName><br>
      <input placeholder="Type" class="input-lg" type="text" #newType><br>
      <input placeholder="Abv" class="input-lg" type="number" #newAbv><br>
      <input placeholder="Price" class="input-lg" type="number" #newPrice><br>
      <button (click)="addKeg('Brewery', 'Name', 'Type', 'Abv', 'Price')" class="btn-success btn-lg add-button">Add</button>
    </div>
    <div class="col-sm-4">
    </div>
    <div class="col-sm-4">
    </div>
  </div>
  `
})

export class newKegComponent {
  public onSubmitNewKeg: EventEmitter<any[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(brewery: HTMLInputElement, name: HTMLInputElement, type: HTMLInputElement, abv: HTMLInputElement, price: HTMLInputElement) {
    this.onSubmitNewKeg.emit([brewery.value, name.value, type.value, abv.value, price.value]);
    brewery.value = "";
    name.value = "";
    type.value = "";
    abv.value = "";
    price.value = "";
    }
}
