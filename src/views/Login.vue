<script setup>
import TodoOutlet from '@/components/TodoOutlet.vue';
</script>

<template>
  <TodoOutlet>
    <main>
      <h2 class="font-bold text-2xl text-center">最實用的線上代辦事項服務</h2>
      <form novalidate>
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label for="password">密碼</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">送出</button>
      </form>
    </main>
  </TodoOutlet>
</template>
