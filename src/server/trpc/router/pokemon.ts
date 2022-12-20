import { publicProcedure, router } from "../trpc";
import { PokemonClient } from 'pokenode-ts';
import { z } from "zod";

const api = new PokemonClient();

export const pokemonRouter = router({
  get: publicProcedure
    .query(async () => {
      const pokemons = await api.listPokemons(100, 100);
      return pokemons;
    }),
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const pokemon = await api.getPokemonById(input.id);
      return pokemon;
    })
})