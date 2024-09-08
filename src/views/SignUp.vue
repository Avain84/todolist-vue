<script setup>
import TodoOutlet from '@/components/TodoOutlet.vue';
import { ErrorMessage } from 'vee-validate';

</script>

<template>
  <TodoOutlet>
    <main>
      <h2 class="font-bold text-2xl text-center">註冊帳號</h2>
      <VForm>
        <div>
          <label for="email">Email</label>
          <VField type="email" name="email" id="email" placeholder="請輸入 Email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label for="userName">你的暱稱</label>
          <VField type="text" name="userName" id="userName" placeholder="請輸入您的暱稱" />
          <ErrorMessage name="userName" />
        </div>
        <div>
          <label for="password">密碼</label>
          <VField type="password" name="password" id="password" placeholder="請輸入密碼" />
          <ErrorMessage name="password" />
        </div>
        <div>
          <label for="password-valid">再次輸入密碼</label>
          <VField type="password" name="password-valid" id="password-valid" placeholder="請再次輸入密碼" />
          <ErrorMessage name="password-valid" />
        </div>
        <button type="submit">註冊帳號</button>
        <RouterLink to="/">登入</RouterLink>
      </VForm>
    </main>
  </TodoOutlet>
</template>