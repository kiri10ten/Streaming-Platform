<template>
<v-card style="width: fit-content;" class="rounded-lg mt-5 mb-5" >
  <v-img cover width="199px" height="277px" :src=props.source></v-img>
  <p class="ma-5" rounded="lg" style="width: 150px;"> {{ props.title }}</p>
</v-card>

</template>

<script setup lang="ts">

const props = defineProps<  {source: string
  title:string}>()
</script>