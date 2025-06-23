import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardPokemonComponent } from './card-pokemon.component';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Pokemon } from '../models/Pokemon';

@Component({
  template: `<app-card-pokemon [pokemons]="mockPokemons"></app-card-pokemon>`,
  imports: [CardPokemonComponent]
})
class TestHostComponent {
  mockPokemons: Pokemon[] = [
    {
      name: 'bulbasaur',
      types: [{ type: { name: 'grass' } }],
      sprites: {
        other: {
          'official-artwork': {
            front_default: 'https://pokeapi.co/media/sprites/pokemon/other/official-artwork/1.png'
          }
        }
      }
    } as Pokemon
  ];
}

describe('CardPokemonComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), TestHostComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('Criando o CardPokemonComponent de test', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar o nome e imagem do Pokémon', () => {
    const compiled = fixture.nativeElement as HTMLElement; 
    const img = compiled.querySelector('img');
    const title = compiled.querySelector('h2');

    expect(img?.getAttribute('src')).toContain('official-artwork');
    expect(title?.textContent).toContain('bulbasaur');
  });

  it('deve aplicar classe CSS com o nome do tipo', () => {
    const compiled = fixture.nativeElement as HTMLElement; 
    const cardDiv = compiled.querySelector('.card-container');
    expect(cardDiv?.classList).toContain('grass');
  });
});
