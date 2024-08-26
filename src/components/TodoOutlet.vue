<script setup>
import guestImgWeb from '@/assets/guestImgWeb.svg'
</script>

<template>
  <div class="container layout-grid">
    <div class="col-start-2 col-span-5">
      <img :src="guestImgWeb" alt="To-do List Web">
    </div>
    <div class="col-start-8 col-span-4">
      <h1>Todo</h1>
    </div>
  </div>
</template>