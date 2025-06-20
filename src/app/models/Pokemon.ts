export interface Pokemons extends NamedAPIResource {}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  cries: Cries;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface HeldItem {
  item: NamedAPIResource;
  version_details: HeldItemVersion[];
}

export interface HeldItemVersion {
  version: NamedAPIResource;
  rarity: number;
}

export interface Move {
  move: NamedAPIResource;
  version_group_details: MoveVersion[];
}

export interface MoveVersion {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
}

export interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other?: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    'official-artwork': {
      front_default: string | null;
      front_shiny: string | null;
    };
  };
  versions?: any;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface Type {
  slot: number;
  type: NamedAPIResource;
}

export interface Cries {
  latest: string;
  legacy: string;
}
