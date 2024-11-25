import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokeStore = defineStore('pokemon', () => {
  const starterPack = ['Charmander', 'Charmeleon', 'Charizard']
  const pokeName = ref('')
  const currentPokemon = ref('')
  const spriteSrc = ref(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
  )

  return { pokeName, starterPack, currentPokemon, spriteSrc }
})
