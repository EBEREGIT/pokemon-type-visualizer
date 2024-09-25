export type BasicPokemon = {
  name: string;
  url: string;
};

export type Ability = {
  ability: BasicPokemon;
  is_hidden: false;
  slot: 1;
};

type Cry = {
  latest: string;
  legacy: string;
};

type Game = {
  game_index: 153;
  version: BasicPokemon;
};

type Sprites = {
  back_default: string;
  back_female: null | string;
  back_shiny: string;
  back_shiny_female: null | string;
  front_default: string;
  front_female: null | string;
  front_shiny: string;
  front_shiny_female: null | string;
};

type stat = {
  base_stat: number;
  effort: number;
  stat: BasicPokemon;
};

export type BasicPokemonType = {
  slot: 1;
  type: BasicPokemon;
};

type Version_group_detail = {
  level_learned_at: 0;
  move_learn_method: BasicPokemon;
  version_group: BasicPokemon;
};

type Move = {
  move: BasicPokemon;
  version_group_details: Version_group_detail[];
};

export type BasicPokemonDetails = {
  abilities: Ability[];
  base_experience: number;
  cries: Cry;
  forms: BasicPokemon[];
  game_indices: Game[];
  height: number;
  held_items: [];
  id: number;
  is_default: true;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: BasicPokemon;
  sprites: Sprites;
  stats: stat[];
  types: BasicPokemonType[];
  weight: number;
};

export type SortedPokemon = {
  name: string;
  count: number;
  color: string;
  percentage: number;
};

export type useGetPokemonsData = {
  count: number;
  next: string;
  previous: null;
  results: BasicPokemon[];
};