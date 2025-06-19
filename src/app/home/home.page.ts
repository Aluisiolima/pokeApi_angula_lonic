import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { CardPokemonComponent } from '../card-pokemon/card-pokemon.component';
import { PokemonService } from '../services/pokemon.service'; 
import { finalize, forkJoin } from 'rxjs';
import { Pokemon } from '../models/Pokemon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, CardPokemonComponent],
})
export class HomePage {
  public pokemons: Pokemon[] = [];
  private limit: number = 40;
  private offset: number = 0;
  private isLoading: boolean = false;

  constructor(private readonly pokemonServices: PokemonService) {}

  ngOnInit(): void {
    this.fetchDate();
  }

  fetchDate(event?: any): void {
    if (this.isLoading) return;
    this.isLoading = true;

    this.pokemonServices
      .getPokemons(this.limit, this.offset)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          if (event) event.target.complete();
          this.offset += this.limit;
        }),
      )
      .subscribe((dados) => {
        const pokemons = dados.results.map((p) => this.pokemonServices.getPokemon(p.name));

        forkJoin(pokemons).subscribe((res) => {
          this.pokemons = [...this.pokemons, ...res];
        });
      });
  }
}
