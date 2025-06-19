import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, Pokemons } from '../models/Pokemon';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

interface Responser {
  count: string;
  next: string;
  previous: string;
  results: Pokemons[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly apiUrl = environment.apiUrl;
  private cache = new Map<string, Pokemon>();

  constructor(private readonly http: HttpClient) {}

  getPokemons(limit: number = 20, offset: number = 0): Observable<Responser> {
    return this.http.get<Responser>(`${this.apiUrl}/pokemon/?limit=${limit}&offset=${offset}`);
  }

  getPokemon(name: string): Observable<Pokemon> {
    if (this.cache.has(name)) {
      return of(this.cache.get(name) as Pokemon);
    }

    return this.http
      .get<Pokemon>(`${this.apiUrl}/pokemon/${name}/`)
      .pipe(tap((data) => this.cache.set(name, data)));
  }
}
