import { ref } from 'vue';

export function createI18n(translations) {
  const locale = ref('pt-BR');

  function t(key) {
    const keys = key.split('.');
    let value = translations[locale.value];
    for (const k of keys) value = value?.[k];
    return value ?? key;
  }

  function setLocale(lang) {
    locale.value = lang;
  }

  return { locale, t, setLocale };
}
