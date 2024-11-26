<template>
  <section v-if="store.currentPokemon.name" class="form">
    <h3>Selected: {{ capitalize(store.currentPokemon.name) }}</h3>
    <span v-if="store.isFetchError" class="text-danger">Введите правильного покемона</span>
    <img :src="store.currentPokemon.img" :alt="store.currentPokemon.name" v-else />
  </section>
</template>

<script setup>
import { usePokeStore } from '@/store/pokemon'
import { capitalize } from '@/utils/capitalize.js'
const store = usePokeStore()
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

