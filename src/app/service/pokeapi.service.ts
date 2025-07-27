import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
 
  private url: string ="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";

  constructor(
    private http: HttpClient
  ) { }
  
  get apiListPokemon() : Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(
        res => res
      ),
      tap(
        res => res.results.map((respokemons: any) =>{
          this.apiGetPokemon(respokemons.url)
          .subscribe(
            res => respokemons.status =res
          )
        } )
      )
    );
  }

  public apiGetPokemon( url : string): Observable<any>{
    return this.http.get<any>(url).pipe(
      map(
        res => res
      
      )
    )
  }
}
