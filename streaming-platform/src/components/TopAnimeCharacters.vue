<template>
    <div  class="d-flex flex-column ga-5">
    <h2  class="align-center">Top Anime Characters</h2>
    <div>
   <v-row>
    <v-col v-for="character in allanimecharacters">
        <v-card style="width: fit-content;" >
    <p class="text-center ma-7" > {{ character.name }}</p>
    <img   :src="character.images.jpg.image_url">
</v-card>
    
    </v-col>
   </v-row>
</div>
</div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  
  const allanimecharacters = ref([]);
  
  const fetchcharacters = async () => {
    const response = await fetch("https://api.jikan.moe/v4/top/characters");
    const data = await response.json();
    allanimecharacters.value = data.data;
    console.log(allanimecharacters.value);
  };
  
  onMounted(fetchcharacters);
  </script>