<template>
  <section>
    <h2>Starter Pack</h2>
    <div>
      <button @click="fetchPokemon(pokemon)" v-for="pokemon in starterPack" :key="pokemon">
        {{ pokemon }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { usePokeStore } from '@/store/pokemon'

const { fetchPokemon } = usePokeStore()
const starterPack = ['Charmander', 'Charmeleon', 'Charizard']
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
