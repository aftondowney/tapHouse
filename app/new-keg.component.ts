import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';
import {KegListComponent} from './keg-list.component';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Add a new keg:</h3>
    <div class="col-sm-4">
      <input placeholder="Brewery" class="input-lg" type="text" #newBrewery><br>
      <input placeholder="Name" class="input-lg" type="text" #newName><br>
      <input placeholder="Abv" class="input-lg" type="number" #newAbv><br>
      <input placeholder="Price" class="input-lg" type="number" #newPrice><br>
      <button (click)="addKeg('Brewery', 'Name', 'Abv', 'Price')" class="btn-success btn-lg add-button">Add</button>
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
  addKeg(brewery: HTMLInputElement, name: HTMLInputElement, abv: HTMLInputElement, price: HTMLInputElement) {
    this.onSubmitNewKeg.emit([brewery.value, name.value, abv.value, price.value]);
    brewery.value = "";
    name.value = "";
    abv.value = "";
    price.value = "";
    }
}
