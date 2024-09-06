<script setup>
import { defineRule, Form, Field, ErrorMessage, configure } from 'vee-validate';
import { all } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import TodoOutlet from '@/components/TodoOutlet.vue';
import { ref } from 'vue';

setLocale('zh_TW'); //設置 繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }), //將訊息轉成繁體
  validateOnInput: true, //為true時，輸入便會驗證，false離開focus狀態才會驗證
})

Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule)
})

//針對欄位 配置 驗證api
const schema = {
  email: 'required|email', //規則為 必填，為email格式 ( 規則api參考上方 驗證規則rule文件 )
  password: 'required|min:6' //規則為 必填，最小要6個字元
}

const userLoginData = ref({
  email: '',
  password: ''
})

const handleLogin = (validate, resetForm) => {
  const { valid } = validate();
  if (valid) {
    alert('登入成功');
    resetForm();
  }
}

</script>

<template>
  <TodoOutlet>
    <main>
      <h2 class="font-bold text-2xl text-center">最實用的線上代辦事項服務</h2>
      <Form :validation-schema="schema" v-slot="{ resetForm, validate }">
        <div>
          <label for="email">Email</label>
          <Field type="email" name="email" id="email" v-model="userLoginData.email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label for="password">密碼</label>
          <Field type="password" name="password" id="password" v-model="userLoginData.password" />
          <ErrorMessage name="password" />
        </div>
        <button type="submit"
          @click.prevent="handleLogin(validate, resetForm)"
        >送出</button>
      </Form>
    </main>
  </TodoOutlet>
</template>
