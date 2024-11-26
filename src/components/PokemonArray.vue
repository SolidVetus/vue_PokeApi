<template>
  <section class="poke-arr">
    <div>
      <img
        :src="pokemon.img"
        :alt="pokemon.name"
        v-for="pokemon in pokeArray"
        :key="pokemon.name"
      />
    </div>
    <span class="text-danger" v-if="isInArrayError"><strong>Покемоны дублируются</strong></span>
  </section>
</template>

<script setup>
import { usePokeStore } from '@/store/pokemon'
import { reactive, ref, watch } from 'vue'

const { currentPokemon } = usePokeStore()
const pokeArray = reactive([])
const isInArrayError = ref(false)

const addToArray = (pokemon) => {
  const isInArray = pokeArray.some((item) => item.name === pokemon.name)
  if (isInArray) return (isInArrayError.value = true)
  if (pokeArray.length >= 4) {
    pokeArray.shift()
  }
  isInArrayError.value = false
  pokeArray.push(pokemon)
}

watch(
  () => currentPokemon.name,
  () => addToArray({ ...currentPokemon })
)
</script>

<style scoped>
.poke-arr {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
