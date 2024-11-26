import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const usePokeStore = defineStore('pokemon', () => {
  const currentPokemon = reactive({})
  const isFetchError = ref(false)

  const fetchPokemon = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((response) => response.json())
      .then(({ name, sprites }) => {
        isFetchError.value = false
        currentPokemon.name = name
        currentPokemon.img = sprites.front_default
      })
      .catch(() => {
        isFetchError.value = true
        currentPokemon.name = 'Ошибка'
      })
  }

  return { currentPokemon, isFetchError, fetchPokemon }
})
