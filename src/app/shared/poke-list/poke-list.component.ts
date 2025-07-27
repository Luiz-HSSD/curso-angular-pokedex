import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  
   public getAllPokemons:any;
   private getAllPokemonsStatic:any;
   public apiError: boolean = false;
  constructor(private pokeapiService:PokeapiService){

  }

  public getSeachContext(value :string)
  {
     const filter = this.getAllPokemonsStatic.filter(
      (res: any) => {
          return !res.name.indexOf(value.toLowerCase())
      },
      (error: any)=>{
          this.apiError = true;
      }
     );
     this.getAllPokemons =  filter;
  }

  
  ngOnInit(): void {
    this.pokeapiService.apiListPokemon.subscribe(
      
      res => { 
        this.getAllPokemonsStatic  = this.getAllPokemons = res.results;
        console.log(res)
      }
    );
  }
}
