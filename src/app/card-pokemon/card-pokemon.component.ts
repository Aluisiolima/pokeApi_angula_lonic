import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../models/Pokemon';
import { IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
  imports: [CommonModule, IonCol, IonGrid, IonRow, RouterLink],
})
export class CardPokemonComponent implements OnInit {
  @Input() pokemons: Pokemon[] = [];

  ngOnInit(): void {
    return;
  }
}
