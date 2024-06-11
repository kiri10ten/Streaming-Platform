<template>
    <div>
      <h1>{{ apidata.title }}</h1>
      <p>{{ apidata.synopsis }}</p>    </div>
      <AnimeCommentSection/>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  import AnimeCommentSection from '../components/AnimeCommentSection.vue'
  const route = useRoute();

  const apidata = ref([]);


  const fetchData = async () => {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${route.params.id}`);
      const data = await response.json();
      apidata.value = data.data;
      console.log(apidata.value);
    };
  
  
  onMounted(async () => {
   
    await fetchData();
  });
  </script>