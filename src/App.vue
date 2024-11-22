<template>
  <div>
    <img
      alt="PokéAPI"
      src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    />
  </div>
  <button @click="">Charmander</button>
  <button @click="">Charmeleon</button>
  <button @click="">Charizard</button>
  <br />
  <h2>Enter Pokemon name:</h2>
  <input type="text" v-model="pokeName" @keydown.enter="setPokemonName" />
  <br />
  <button @click="setPokemonName">Fetch Pokemon</button>
  <div>
    <h3>Selected:</h3>
    <img src="" alt="" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const pokeName = ref('ditto')
const setSpriteSrc = ref('')

const setPokemonName = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${queryString.toLowerCase()}`)
    .then((response) => response.json())
    .then((json) => {
      setSpriteSrc(json.sprites.front_default)
      return json
    })
  // .then(({ name }) => setOutputName(name))
  // .catch(() => setError(true));
}
</script>

<style lang="scss" scoped>
</style>
