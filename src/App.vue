<template>
  <div>
    <img
      alt="PokéAPI"
      src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    />
  </div>
  <button @click.prevent="fetchPokemon">{{ setPokeName('Charmander') }}</button>
  <button @click.prevent="fetchPokemon">{{ setPokeName('Charmeleon') }}</button>
  <button @click.prevent="fetchPokemon">{{ setPokeName('Charizard') }}</button>
  <br />
  <h2>Enter Pokemon name:</h2>
  <input type="text" @keydown.enter.prevent="setPokeName" />
  <br />
  <button @click="fetchPokemon">Fetch Pokemon</button>
  <div>
    <h3>Selected: {{ pokeName }}</h3>
    <img :src="spriteSrc" :alt="pokeName" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { usePokeStore } from './store/pokemon'

// const pokeStore = usePokeStore()
// const currentPokemon = pokeStore.pokeName.value

const pokeName = ref('ditto')
const spriteSrc = ref(
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
)
const setPokeName = (payload) => (pokeName.value = payload)

const fetchPokemon = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.value.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
      spriteSrc.value = data.sprites.front_default
    })
  return { spriteSrc }

  // .then(({ name }) => setOutputName(name))
  // .catch(() => setError(true));
}
</script>

<style lang="scss" scoped>
</style>
