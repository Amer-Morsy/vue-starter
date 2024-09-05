<template>
  <div class="app-body">
    <div class="nav-bar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img :src="imgLogo" alt="" class="logo" />
            El-Mohands-khana
          </a>
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    <router-view class="app-content" />
    <div class="footer">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-text"> @copy writes </span>
        </div>
      </nav>
    </div>
  </div>
  <ScrollToTop />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import ScrollToTop from './components/ScrollToTop.vue';
import { imgLogo } from './utils/images';
import {
  getAppLanguage,
  setAppTitle,
  setRootStyleLang,
  // setRootStyleTheme,
} from './utils/helper';

export default defineComponent({
  components: { ScrollToTop },
  setup() {
    const { locale } = useI18n({ useScope: 'global' });
    locale.value = getAppLanguage();
    setAppTitle();
    setRootStyleLang();
    // setRootStyleTheme();
    return {
      imgLogo,
    };
  },
});
</script>
