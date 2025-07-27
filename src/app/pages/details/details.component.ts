import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeapiService } from 'src/app/service/pokeapi.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public isLoading: boolean =false;
  public apiError: boolean = false;
  private urlPokemon: string = "https://pokeapi.co/api/v2/pokemon/";
  private urlName: string = "https://pokeapi.co/api/v2/pokemon-species/"; 
  public pokemon:any;
  constructor (
    private activatedRoute: ActivatedRoute,
    private pokeapiService: PokeapiService,
  ){

   }
  ngOnInit(): void {
      this.getpokemon();
  }

  public getpokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeapiService.apiGetPokemon(`${this.urlPokemon}${id}`);
    const name = this.pokeapiService.apiGetPokemon(`${this.urlName}${id}`);

    return forkJoin([pokemon , name]).subscribe(
      res =>  {
       this.pokemon =  res
       this.isLoading = true;

      },
      error => {
        this.apiError=true;
      }
    );
  }

}
