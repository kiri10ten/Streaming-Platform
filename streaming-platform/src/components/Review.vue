<template>

<div >
<h2 class="pa-7"> Reviews</h2>
<v-row  style="width: 600px;">
  <v-col  class="w-full">
    <div class="pa-5">
      <v-list variant="plain" class="rounded-lg " :items="formattedReviews" lines="three" item-props>
      <template  v-slot:subtitle="{ subtitle }">
        <div v-html="subtitle"></div>
      </template>
    </v-list>
  </div>
  </v-col>
</v-row>
</div>


</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const reviews = ref([]);
const formattedReviews = ref([]);

const fetchReviews = async () => {
  const res = await fetch("https://api.jikan.moe/v4/top/reviews");
  const data = await res.json();
  reviews.value = data.data.slice(0, 5);

  formattedReviews.value = reviews.value.map(review => ({
    title: review.user.username,
    subtitle: review.review
  }));
};

const reviewItems = (review) => {
  return [
    {
      prependAvatar: review.prependAvatar,
      title: review.title,
      subtitle: review.subtitle,
    },
  ];
};

onMounted(fetchReviews);
</script>
