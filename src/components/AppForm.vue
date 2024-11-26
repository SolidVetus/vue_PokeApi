<template>
  <form @submit.prevent="formFetch">
    <label for="pokemon-name" class="label">Enter Pokemon name:</label>
    <input id="pokemon-name" type="text" v-model="nameInput" placeholder="Example: Pikachu" />
    <button>Fetch Pokemon</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { usePokeStore } from '@/store/pokemon'
const { fetchPokemon } = usePokeStore()
const nameInput = ref('')

const formFetch = async () => {
  if (nameInput.value.length === 0) return
  return new Promise((resolve) => {
    resolve(fetchPokemon(nameInput.value))
  }).then(() => (nameInput.value = ''))
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
