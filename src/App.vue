<template>
  <div>
    <header>
      <img
        alt="PokéAPI logo"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        class="logo"
      />
    </header>

    <pokemon-array />

    <starter-pack />

    <br />

    <app-form />

    <br />

    <selected-pokemon />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import StarterPack from './components/StarterPack.vue'
import AppForm from './components/AppForm.vue'
import SelectedPokemon from './components/SelectedPokemon.vue'
import PokemonArray from './components/PokemonArray.vue'
import { usePokeStore } from './store/pokemon'

const store = usePokeStore()

onBeforeMount(() => store.fetchPokemon('ditto'))
</script>


