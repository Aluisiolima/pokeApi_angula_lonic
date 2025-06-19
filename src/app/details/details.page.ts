import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/Pokemon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonIcon, RouterLink],
})
export class DetailsPage implements OnInit {
  constructor(
    private readonly pokemonServices: PokemonService,
    private readonly router: ActivatedRoute,
  ) {
    addIcons({ arrowBackOutline });
  }

  public pokemon: Pokemon | null = null;
  public readonly statsMax: number = 270;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.pokemonServices.getPokemon(String(params.get('name'))).subscribe((res) => {
        this.pokemon = res;
      });
    });
  }
}
