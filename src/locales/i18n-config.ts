import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { LANGUAGES } from './../utils/constants';

import arLocale from './ar.json';
import enLocale from './en.json';
const locale = LANGUAGES.default;

const messages = {
  [LANGUAGES.arEG]: arLocale,
  [LANGUAGES.enUS]: enLocale,
};

const i18n = createI18n({
  legacy: false,
  locale: locale,
  fallbackLocale: LANGUAGES.default,
  messages,
});

createApp({}).use(i18n);

export default i18n;
