<template>
  <div style="display: block">
    <div>
      <img
        alt="PokéAPI"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        class="logo"
      />
    </div>
    <button @click="fetchPokemon(pokemon)" v-for="pokemon in pokeStore.starterPack" :key="pokemon">
      {{ pokemon }}
    </button>
    <br />
    <h2>Enter Pokemon name:</h2>
    <input
      type="text"
      v-model="pokeStore.pokeName"
      placeholder="Example: Pikachu"
      @keyup.enter="setPokeName(pokeStore.pokeName)"
    />
    <br />
    <button @click="setPokeName(pokeStore.pokeName)">Fetch Pokemon</button>
    <div>
      <h3>Selected: {{ pokeStore.currentPokemon }}</h3>
      <span v-if="setError" class="text-danger">Введите правильного покемона</span>
      <img :src="pokeStore.spriteSrc" :alt="pokeStore.pokeName" v-else />
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { usePokeStore } from './store/pokemon'

const pokeStore = usePokeStore()
const setError = ref(false)

const setPokeName = (payload) => {
  pokeStore.pokeName = payload
  fetchPokemon(pokeStore.pokeName)
}

const setCurrentPokemon = (name) => {
  pokeStore.currentPokemon = name.charAt(0).toUpperCase() + name.slice(1)
}

const fetchPokemon = (name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
      pokeStore.spriteSrc = data.sprites.front_default
      setError.value = false
      return data
    })
    .then(({ name }) => setCurrentPokemon(name))
    .catch(() => {
      setError.value = true
      pokeStore.currentPokemon = 'Ошибка'
    })
}

onBeforeMount(() => fetchPokemon('ditto'))

// watch(pokeName, () => fetchPokemon())
</script>

<style lang="scss" scoped>
</style>
