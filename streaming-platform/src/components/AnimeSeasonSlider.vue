<template>
  <div class="linear-background">
    <v-carousel style="margin-top: 90px; " show-arrows="hover" mandatory="force" height="500px" hide-delimiters>
      <v-carousel-item cover v-for="i in firstfive">
        <v-sheet  class="ml-7 mb-5 mr-7 " color="#121212">
          <div class="d-flex  justify-space-between">
            <div class="pl-5 gradient-background pt-3 pa-5  ml-15 mt-10">
              <h1>{{ i.title }}</h1>
              <h2>{{ i.season }}</h2>
              <div>
                <div class="d-flex ga-3">
                  <v-chip class="mt-3" rounded="0">{{ i.type }}</v-chip>
                  <v-chip class="mt-3" variant="elevated" rounded="0">{{ i.aired.string }}</v-chip>
                </div>
                <p class="pt-5">{{ i.synopsis.slice(0, 50) }}...</p>
              </div>
              <v-btn class="mt-5" base-color="#5a2e98">Watch Now</v-btn>
            </div>
            <v-sheet class="mr-15 gradient-background" color="#121212" height="100%" width="300">
              <v-img width="100%" :src="i.images.jpg.image_url"></v-img>
            </v-sheet>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="d-flex ga-5">
      <div style="width: 239%">
        <a class="ml-6" href="http://localhost:5173/animeall">All the anime</a>
        <h1 class="ml-5">Anime's to Watch</h1>
        <v-row no-gutters="true" class="ml-5">
          <v-col cols="3" v-for="i in otheranime">
            <Allanimelist :source="i.images.jpg.image_url" :title="i.title" />
          </v-col>
        </v-row>
      </div>
      <TopAnimeList style="width: 100%;" />
    </div>
  </div>
</template>

<script setup>
import Allanimelist from '@/components/Allanimelist.vue';
import TopAnimeList from '@/components/TopAnimeList.vue';
import { ref, onMounted, onBeforeMount } from 'vue';
const animeList = ref([]);
const firstfive = ref();
const otheranime = ref();
const fetchAnimeList = async () => {
  try {
    const response = await fetch('https://api.jikan.moe/v4/anime');
    const data = await response.json();
    animeList.value = data.data;
    firstfive.value = animeList.value.slice(0, 5);
    otheranime.value = animeList.value.slice(5, animeList.value.length);
    console.log(data.data);
  } catch (error) {
    console.error('Error fetching anime list:', error);
  }
};
onMounted(() => {
  fetchAnimeList();
});
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(90deg, #3f3f40 0%, #272727 50%, #121212 100%);
  height: 100%;


}

.gradient-background::after{
  background: linear-gradient(90deg, #3f3f40 0%, #272727 50%, #121212 100%);


}

.gradient-background::before{
 background: linear-gradient(180deg, #242428 5%, #242428d4 15%, #24242800 100%);
;
}
</style>