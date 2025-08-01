import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {
 @Output()  public emitSearch: EventEmitter<string> = new EventEmitter(); 

 public search(value: string){
  console.log(value);
  this.emitSearch.emit(value);
 }
}
