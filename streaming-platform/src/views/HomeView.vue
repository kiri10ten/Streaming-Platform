<template>
    <v-app-bar  :elevation="0">
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

  
    <v-btn  variant="flat" base-color="#5a2e98"> Sign in </v-btn>
  </div>
 
      </template>
    </v-app-bar>
 =
  <AnimeSeasonSlider></AnimeSeasonSlider>



 
      <v-footer class="pa-5" border>Aniwave @2024</v-footer>
 


</template>

<script setup>
import AnimeSeasonSlider from '@/components/AnimeSeasonSlider.vue';
</script>

<style>
.custom-app .v-application__wrap {
  min-height:100px;
}


</style> 