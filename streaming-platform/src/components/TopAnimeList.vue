<template>

    <div class="d-flex flex-column mr-8">
    <h1 class="w-100 pt-3 mb-5"> Top   10 Animes</h1>

   <div class="pb-3"  v-for="(anime,i) in topanime">
  
    <v-card border="md"  class="d-flex ga-3">
        <div style="width: 20%;" class="d-flex align-center pa-5 text-h2 ">
 {{ i+1 }}
    </div>
        <img  style="height: 135px; width: 86px;" :src="anime.images.jpg.image_url">
    <p>
        <div class="mt-3" >
      {{ anime.title}}    
      <div>
        <span class="opacity-50 ">{{ anime.type }}</span>
      </div>
   
      <div class="d-flex ga-2 mt-3">
      
        <v-chip rounded="xs" variant="flat" color="red">{{ anime.status }}</v-chip>
        <v-chip rounded="xs"   variant="flat" color="green"> EP- {{ anime.episodes }}</v-chip>
      </div>
    </div>


    </p>
</v-card>

</div>
</div>
  </template>
  
  <script setup lang="ts">
  import { useFetch } from '@vueuse/core';
  import { ref } from 'vue';
  
  const topanime = ref(null);
  
  const fetchData = async () => {
    try {
      const { isFetching, error, data } = await useFetch('https://api.jikan.moe/v4/top/anime');
      topanime.value = JSON.parse(data.value);
      topanime.value=topanime.value.data.slice(0, 10);
      console.log(topanime.value.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();
  </script>