import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokemon(pokemonName) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
  }

  // getAbilities(pokemonName): Observable<any> {
  //   return this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
  //     .pipe(map(res => res));
  // }
}
