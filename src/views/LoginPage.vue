<script setup>
import TodoOutlet from '@/components/TodoOutlet.vue';

const handleLogin = (value) => {
  console.log(value);
};

</script>

<template>
  <TodoOutlet>
    <main>
      <h2 class="font-bold text-2xl text-center">最實用的線上代辦事項服務</h2>
      <VForm @submit="handleLogin" v-slot="{ meta }">
        <div>
          <label for="email">Email</label>
          <VField type="email" id="email" name="email"
            rules="required|email" />
          <ErrorMessage name="email" />

        </div>
        <div>
          <label for="password">Password</label>
          <VField type="password" id="password" name="password"
            rules="required|min:6" />
          <ErrorMessage name="password" />
        </div>
        <button type="submit" :disabled="!meta.valid">登入</button>
      </VForm>
    </main>
  </TodoOutlet>
</template>
