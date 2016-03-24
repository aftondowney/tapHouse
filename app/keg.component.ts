import {Component} from 'angular2/core';
import {Task} from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <input *ngIf="keg.empty" type="checkbox" checked (click)="toggleEmpty(false)"/>
    <input *ngIf="!keg.empty" type="checkbox" (click)="toggleEmpty(true)"/>
    <label>{{ keg.name }}</label>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
  toggleEmpty(setState: boolean) {
    this.keg.empty = setState
  }
}
