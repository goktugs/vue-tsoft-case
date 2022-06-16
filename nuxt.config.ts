import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  //   buildModules: ['@intlify/nuxt3'],
  //   intlify: {
  //     vueI18n: {
  //       locale: 'en',
  //       fallbackLocale: 'en',
  //       messages: {
  //         en: {
  //           hello: 'Hello',
  //           login: {
  //             username: 'User Name',
  //             password: 'Password',
  //           },
  //         },
  //         tr: {
  //           hello: 'Merhaba',
  //           login: {
  //             username: 'Kullanıcı Adı',
  //             password: 'Şifre',
  //           },
  //         },
  //         fr: {
  //           hello: 'Bonjour',
  //           login: {
  //             username: 'Nom dutilisateur',
  //             password: 'Le mot de passe',
  //           },
  //         },
  //       },
  //     },
  //   },
  // });

  // export interface IntlifyModuleOptions {
  //   /**
  //    * Options specified for `createI18n` in vue-i18n.
  //    *
  //    * If you want to specify not only objects but also functions such as messages functions and modifiers for the option, specify the path where the option is defined.
  //    * The path should be relative to the Nuxt project.
  //    */
  //   vueI18n?: I18nOptions | string;
  //   /**
  //    * Define the directory where your locale messages files will be placed.
  //    *
  //    * If you don't specify this option, default value is `locales`
  //    */
  //   localeDir?: string;
});
