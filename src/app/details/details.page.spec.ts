import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsPage } from './details.page';
import { PokemonService } from '../services/pokemon.service';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { Pokemon } from '../models/Pokemon';

describe('DetailsPage', () => {
  let component: DetailsPage;
  let fixture: ComponentFixture<DetailsPage>;
  let mockServicesPokemon: jasmine.SpyObj<PokemonService>;
  let mockActivatedRoute;

  beforeEach(async () => {
    mockActivatedRoute = {
      paramMap: of(convertToParamMap({ name: 'pikachu' }))
    };

    mockServicesPokemon = jasmine.createSpyObj('PokemonService', ['getPokemon']);
    mockServicesPokemon.getPokemon.and.returnValue(of({
      name: 'pikachu',
      id: 25,
      height: 40,
      weight: 60,
      cries: {
        latest: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/cries/25.ogg',
        legacy: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/cries/25.mp3',
      },
      sprites: {
        other: {
          'official-artwork': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
          },
        },
      },
      types: [
        { type: { name: 'electric' } },
      ],
      stats: [
        { base_stat: 55, stat: { name: 'hp' } },
        { base_stat: 40, stat: { name: 'attack' } },
        { base_stat: 50, stat: { name: 'defense' } },
        { base_stat: 50, stat: { name: 'special-attack' } },
        { base_stat: 50, stat: { name: 'special-defense' } },
        { base_stat: 90, stat: { name: 'speed' } },
      ],
    } as Pokemon));

    await TestBed.configureTestingModule({
      imports: [DetailsPage],
      providers: [
        { provide: PokemonService, useValue: mockServicesPokemon },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        provideHttpClient(),
        provideRouter([]),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsPage);
    component = fixture.componentInstance;
  });

  it('Criando DetailsPage', () => {
    expect(component).toBeTruthy();
  });
});
