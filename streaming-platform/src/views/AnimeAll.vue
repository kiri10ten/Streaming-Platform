<template>
  <div>
    
    <v-row >
      <v-col v-for="(anime, index) in allanimelist"   :key="index" cols="3">
      <v-card width="fit-content" class="pa-5 ma-3" >

        <div class="d-flex flex-column">
        <img :src="anime.images.jpg.image_url" />
        {{ anime.title }}
      </div>
</v-card>
</v-col>
</v-row>
  
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useFetch } from '@vueuse/core';

  const allanimelist = ref([]);

  const fetchData = async () => {
    try {
      for (let i = 1; i <= 500; i++) {
        const { data } = await useFetch(`https://api.jikan.moe/v4/anime/${i}/full`).json();
        if (data.value) {
          allanimelist.value.push(data.value.data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
</script>
