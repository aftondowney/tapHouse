
export class Keg {
  public empty: boolean = false;

  constructor(public brewery: string, public name: string, public type: string, public abv: number, public price: number, public id: number) {

  }
}
