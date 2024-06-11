<template>
    <div class="pa-4 pt-5">
  

      <v-img width="100px" height="100px" :src="chardesc.images.webp.image_url"></v-img>
      <h1>{{ chardesc.name }}</h1>
      <div  v-if="chardesc">{{ chardesc.about }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { ref } from 'vue';
  
  const router = useRoute();
  const chardesc = ref(null);
  const animemalid = router.params.id;
  
  async function fetchData() {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/characters/${animemalid}`);
      const data = await response.json();
      chardesc.value = data.data;
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData()
  </script>