<template>

<div>
  <v-img cover width="150px" height="200px" :src=props.source></v-img>
  <p>{{ props.title }}</p>
</div>


</template>

<script setup lang="ts">

const props = defineProps<  {source: string
  title:string}>()
</script>