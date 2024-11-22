import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const usePokeStore = defineStore('pokemon', () => {
  const pokeName = ref('ditto')
  const setPokeName = (payload) => (pokeName.value = payload)

  return { pokeName, setPokeName }
})
