<template>
    <div class="container">
      <h1>Comments</h1>
      <v-textarea :clearable="booled"  v-model="newed" style="width: 100%;" label="Label" variant="outlined"></v-textarea>
      <v-btn @click="submittheinput">Submit</v-btn>
  
      <v-card class="ml-10 pa-3" v-for="comment in reversedComments" :key="comment.id">
        {{ comment }}
      </v-card>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const newed = ref('');
  const comments = ref([]);
  const booled=ref(false)

  const submittheinput = () => {


   
    comments.value.push(newed.value
    );
  
    // Save the comments to localStorage
    const key = route.params.id;
    const existingData = JSON.parse(localStorage.getItem(key) || '[]');
  
    if (Array.isArray(existingData)) {
      existingData.push(
       
        newed.value
      );
      localStorage.setItem(key, JSON.stringify(existingData));
      console.log(localStorage.getItem(key));
    }
     newed.value =''
  };
  
  const reversedComments = computed(() => {
    return [...comments.value].reverse();
  });
  
  onMounted(() => {
    const storedData = localStorage.getItem(route.params.id);
    if (storedData) {
      comments.value = JSON.parse(storedData);
    }
  });
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  </style>