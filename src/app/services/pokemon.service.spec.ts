import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[PokemonService]
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('test de services criado', () => {
    expect(service).toBeTruthy();
  });

  it('test getPokemons', () => {
    const mockResponse = {
      results : [
        {name: 'pokemon1', url:'httpp:??askdjajd'},
        {name: 'pokemon2', url:'httpp:??asksdajd'},
        {name: 'pokemon4', url:'httpp:??askdjaadajd'},
      ]
    };

    service.getPokemons().subscribe(pokemon => {
      expect(pokemon.results['0'].name).toEqual('pokemon1');
      expect(pokemon.results['1'].name).toEqual('pokemon2');
      expect(pokemon.results['2'].name).toEqual('pokemon4');
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('test getPokemon', () => {
    const mockResponse = {
      name: 'pikachu',
      id: 25,
      types: [{ type: { name: 'electric' } }]
    };

    service.getPokemon('pikachu').subscribe(pokemon => {
      expect(pokemon.name).toEqual('pikachu');
      expect(pokemon.id).toEqual(25);
      expect(pokemon.types[0].type.name).toEqual('electric');
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/pikachu/');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
