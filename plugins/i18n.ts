import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import fr from '../locales/fr.json';
import tr from '../locales/fr.json';

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
    tr,
  },
});
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n);
});
