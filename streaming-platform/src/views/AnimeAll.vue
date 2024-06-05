<template>
  <div  >
    <v-row ref="el">
      <v-col  v-for="(anime, index) in loadinganime" :key="index" cols="3">
        <v-card width="fit-content" class="pa-5 ma-3">
          <div class="d-flex flex-column">
            {{ anime.Name }}
          </div>

          <!-- <img :src=" "> -->
        </v-card>
      </v-col>
      </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useInfiniteScroll } from '@vueuse/core';

const allanimelist = ref([]);
const loadinganime = ref([]);
const el = ref<HTMLElement | null>(null);
let start = 0;
let n =1
const fetchData = async () => {
  try {
    const response = await fetch(`http://localhost:3000/data?_page=${n}&_per_page=10`);

    if (response.ok) {
      const data = await response.json();''
      console.log(data.data);
      loadinganime.value.push(...data.data);
      console.log(loadinganime.value);
    } else {
      console.error(`Error fetching data: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  } 
};



useInfiniteScroll(
  el,
  () => {
      n=n+1
      if( n<=3){
      fetchData();
      console.log("Infinite scroll triggered");
      }
    
  },
  { distance: 1 } 
);

onMounted(async () => {
   await fetchData();
});
</script>
