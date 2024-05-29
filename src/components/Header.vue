<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="headerWrap">
    <header></header>
  </div>
</template>

<style scoped>
  .headerWrap {
    width: 100%;
    height: 80px;
    /* background: #242424; */
    background-image: url('@/assets/front_bg.jpg');
  }
</style>
