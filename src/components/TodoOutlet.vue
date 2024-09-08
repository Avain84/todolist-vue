<script setup>
import guestImgWeb from '@/assets/guestImgWeb.svg';
import logoLg from '@/assets/logoLg.svg';
</script>

<template>
  <div class="bg-main-yellow flex flex-col min-h-screen">
    <div class="container layout-grid flex-1">
      <div class="hidden col-start-2 col-span-5 md:flex flex-col justify-center gap-4">
        <img :src="logoLg" alt="To-do List Logo">
        <img :src="guestImgWeb" alt="To-do List Web">
      </div>
      <section class="md:col-start-8 col-span-4 flex flex-col gap-6 justify-center items-center">
        <h1 class="md:hidden">
          <img :src="logoLg" alt="To-do List Logo">
        </h1>
        <slot />
      </section>
    </div>
  </div>
</template>
