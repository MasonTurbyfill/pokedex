import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PokeApiService } from '../poke-api.service';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  public pokedexSearchForm: FormGroup;
  public pokemonData: any;

  constructor(private formBuilder: FormBuilder, private pokeApiService: PokeApiService) { }

  ngOnInit() {
    this.pokedexSearchForm = this.formBuilder.group({
      pokemonName: ['']
    });
  }

  sendToPokeAPI(formValues) {
    this.pokeApiService
      .getPokemon(formValues.pokemonName.toLowerCase())
      .subscribe(data => {
        this.pokemonData = data;
        console.log(this.pokemonData);
      });
  }
}
