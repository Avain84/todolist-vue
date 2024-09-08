import { createApp } from 'vue';
import '@/index.css';
import App from './App.vue';
import router from './router';

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { all as AllRules } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true, // 調整為輸入字元立即進行驗證
});

setLocale('zh_TW');

const app = createApp(App);

app.use(router);
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app');
