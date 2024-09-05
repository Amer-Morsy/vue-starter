import i18n from './../locales/i18n-config';
import { LANGUAGES, THEMES } from './constants';

const { t } = i18n.global;

//#region General
export const checkOnlineStatus = (): boolean => navigator.onLine;

export const setAppTitle = (text?: string): void => {
  document.title = text
    ? `${text} - ${t('general.projectName')}`
    : t('general.projectName');
};

export const shrinkNavbar = (): void => {
  window.addEventListener(
    'scroll',
    function () {
      const shrinkHeader = 45;
      const appNavbar = document.querySelector(
        '.app-navbar',
      ) as HTMLInputElement | null;

      if (appNavbar != null) {
        if (
          document.body.scrollTop > shrinkHeader ||
          document.documentElement.scrollTop > shrinkHeader
        ) {
          appNavbar.classList.add('shrink');
        } else {
          appNavbar.classList.remove('shrink');
        }
      }
    },
    true,
  );
};

export const showOrHideScrollBtn = (): void => {
  window.addEventListener(
    'scroll',
    function () {
      const scrollLimit = 100;
      const scrollBtn = document.querySelector(
        '.scroll-btn',
      ) as HTMLInputElement | null;

      if (scrollBtn != null) {
        if (
          document.body.scrollTop > scrollLimit ||
          document.documentElement.scrollTop > scrollLimit
        ) {
          scrollBtn.classList.add('show');
        } else {
          scrollBtn.classList.remove('show');
        }
      }
    },
    true,
  );
};
export const scrollToTop = (): void => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

export const setRootStyleLang = (): void => {
  const language = getAppLanguage();
  const root = document.documentElement;

  if (language == LANGUAGES.arEG) {
    if (root.classList.contains('app-is-ltr'))
      root.classList.remove('app-is-ltr');
    root.classList.add('app-is-rtl');
  } else if (language == LANGUAGES.enUS) {
    if (root.classList.contains('app-is-rtl'))
      root.classList.remove('app-is-rtl');
    root.classList.add('app-is-ltr');
  }
};
export const setRootStyleTheme = (): void => {
  const theme = getAppTheme();
  const root = document.documentElement;

  if (theme == THEMES.light) {
    if (root.classList.contains('dark-theme'))
      root.classList.remove('dark-theme');
    root.classList.add('light-theme');
  } else if (theme == THEMES.dark) {
    if (root.classList.contains('light-theme'))
      root.classList.remove('light-theme');
    root.classList.add('dark-theme');
  }
};
//#endregion General

//#region Language & Theme
export const getValidLanguage = (lang: string | null): string => {
  switch (lang) {
    case LANGUAGES.arEG:
      return LANGUAGES.arEG;
    case LANGUAGES.enUS:
      return LANGUAGES.enUS;
    default:
      return LANGUAGES.default;
  }
};
export const getAppLanguage = (): string => {
  return getValidLanguage(localStorage.getItem('appLanguage'));
};
export const setAppLanguage = (language: string = LANGUAGES.default): void => {
  localStorage.setItem('appLanguage', getValidLanguage(language));
  window.location.reload();
};

export const getValidTheme = (theme: string | null): string => {
  switch (theme) {
    case THEMES.light:
      return THEMES.light;
    case THEMES.dark:
      return THEMES.dark;
    default:
      return THEMES.default;
  }
};
export const getAppTheme = (): string => {
  return getValidTheme(localStorage.getItem('appTheme'));
};
export const setAppTheme = (theme: string = THEMES.default): void => {
  localStorage.setItem('appTheme', getValidTheme(theme));
  window.location.reload();
};
//#endregion Language & Theme
