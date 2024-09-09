<script setup>
import TodoOutlet from '@/components/TodoOutlet.vue';
import { ErrorMessage } from 'vee-validate';

</script>

<template>
  <TodoOutlet>
    <main class="w-full">
      <h2 class="mb-6 font-bold text-2xl text-center">註冊帳號</h2>
      <VForm>
        <div class="mb-4">
          <label for="email">Email</label>
          <VField type="email" name="email" id="email" placeholder="請輸入 Email" />
          <ErrorMessage name="email" />
        </div>
        <div class="mb-4">
          <label for="userName">你的暱稱</label>
          <VField type="text" name="userName" id="userName" placeholder="請輸入您的暱稱" />
          <ErrorMessage name="userName" />
        </div>
        <div class="mb-4">
          <label for="password">密碼</label>
          <VField type="password" name="password" id="password" placeholder="請輸入密碼" />
          <ErrorMessage name="password" />
        </div>
        <div class="mb-6">
          <label for="password-valid">再次輸入密碼</label>
          <VField type="password" name="password-valid" id="password-valid" placeholder="請再次輸入密碼" />
          <ErrorMessage name="password-valid" />
        </div>
        <div class="flex flex-col items-center gap-6">
          <button type="submit" class="main-btn">註冊帳號</button>
          <RouterLink to="/" class="sec-btn">登入</RouterLink>
        </div>
      </VForm>
    </main>
  </TodoOutlet>
</template>
