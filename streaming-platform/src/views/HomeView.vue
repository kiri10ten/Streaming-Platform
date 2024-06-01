<template>
  <v-app class="custom-app">
    <v-app-bar :elevation="0">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <h1> Aniwave</h1>
      </template>
      <v-app-bar-title>
        <v-text-field base-color="#5a2e98" color="#5a2e98"  class="mt-5" label="Search" flat variant="solo"></v-text-field>

</v-app-bar-title>

      <template v-slot:append>
        <div class="d-flex ga-8">
        <div class="d-flex ga-8 ">

   <p>
    Watch2gether
   </p>
   <p>
   Random
   </p>
   <p>
   Read Manga
   </p>
   <p>
 EN|JP
   </p>
  </div>

  
    <v-btn variant="default" base-color="#5a2e98"> Sign in </v-btn>
  </div>
 
      </template>
    </v-app-bar>
  </v-app>
  <AnimeSeasonSlider></AnimeSeasonSlider>
</template>

<script setup>
import AnimeSeasonSlider from '@/components/AnimeSeasonSlider.vue';
</script>

<style>
.custom-app .v-application__wrap {
  min-height:93px;
}


</style> 