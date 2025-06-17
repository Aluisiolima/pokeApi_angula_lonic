import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemons } from '../models/Pokemon';
import { Observable } from 'rxjs';
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

  constructor(private readonly http: HttpClient) {}

  getPokemons(): Observable<Responser> {
    return this.http.get<Responser>(`${this.apiUrl}/pokemon/`);
  }
}
