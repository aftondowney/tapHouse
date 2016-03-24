///child of appComponent
///parent of KegComponent, EditKegDetailsComponent, newKegComponent

import {Component, EventEmitter} from 'angular2/core';
import {KegComponent} from './keg.component';
import {Keg} from './keg.model';
import {EditKegDetailsComponent} from './edit-keg-details.component';
import {newKegComponent} from './new-keg.component';
import {EmptyPipe} from './empty.pipe';

@Component({
  selector:'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [EmptyPipe],
  directives: [KegComponent, EditKegDetailsComponent, newKegComponent],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="empty">Show Full</option>
      <option value="notEmpty">Show Not Full</option>
    </select>
    <keg-display *ngFor="#currentKeg of kegList | empty:filterEmpty"
      (click)="kegClicked(currentKeg)"
      [class.selected]="currentKeg === selectedKeg"
      [keg]="currentKeg">
    </keg-display>
    <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
    </edit-keg-details>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterEmpty: string = "notEmpty";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(brewery: string, name: string, abv: number, price: number): void {
    this.kegList.push(
      new Keg(brewery, name, abv, price, this.kegList.length)
    );
  }
  onChange(filterOption) {
    this.filterEmpty = filterOption;
    console.log(this.filterEmpty);
  }
}
