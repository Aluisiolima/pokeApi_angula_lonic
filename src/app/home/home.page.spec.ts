import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { PokemonService } from '../services/pokemon.service';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { Pokemon } from '../models/Pokemon';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let mockServicesPokemon: jasmine.SpyObj<PokemonService>;

  beforeEach(async () => {
    mockServicesPokemon = jasmine.createSpyObj('PokemonService', ['getPokemon', 'getPokemons']);

    await TestBed.configureTestingModule({
      imports:[HomePage],
      providers:[
        {provide: PokemonService, useValue: mockServicesPokemon},
        provideHttpClient(),
        provideRouter([])
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('Criando HomePage', () => {
    expect(component).toBeTruthy();
  });

  it('test chamando fectDate onInit?', () => {
    const fakePokemons = {
      count: '2',
      next: '3',
      previous: '4',
      results: [
        {name: 'pikachu', url: "dsadjasdj"},
        { name: 'bulbasaur', url: "dsadjasdj"}
      ]
    };

    const fakePikachu = {name: 'pikachu', id: 1};
    const fakeBuldasaur = {name: 'bulbasaur', id: 2};

    mockServicesPokemon.getPokemons.and.returnValue(of(fakePokemons));
    mockServicesPokemon.getPokemon.withArgs('pikachu').and.returnValue(of(fakePikachu as Pokemon));
    mockServicesPokemon.getPokemon.withArgs('bulbasaur').and.returnValue(of(fakeBuldasaur as Pokemon));

    component.fetchDate();

    expect(mockServicesPokemon.getPokemons).toHaveBeenCalledWith(40,0);
  });
});
