import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';
import { Pokemons } from '../models/Pokemon';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
  imports: [CommonModule]
})
export class CardPokemonComponent  implements OnInit {
  public pokemons: Pokemons[] = [];

  constructor(private readonly pokemonServices: PokemonService) { }

  ngOnInit(): void {
    this.pokemonServices.getPokemons().subscribe({
      next: (dados) => this.pokemons = dados.results,
      error: (error) => console.error(error)
    })
  }

}
