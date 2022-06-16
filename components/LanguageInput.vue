<script>
export default {
  name: "LanguageInput",
  data() {
    return { langs: ["en", "fr", "tr"] };
  },
};
</script>

<template>
  <div>
    <select
      class="bg-transparent text-white flex item-center justify-center"
      v-model="$i18n.locale"
    >
      <option
        class="text-black"
        v-for="(lang, i) in langs"
        :key="`lang-${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </div>
</template>