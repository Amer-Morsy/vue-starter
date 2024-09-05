<template>
  <div class="scroll-to-top">
    <button class="scroll-btn" @click="scrollToTop()">
      
      <img :src="imgScrollToTop" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { showOrHideScrollBtn, scrollToTop } from './../utils/helper';
import { imgScrollToTop } from './../utils/images';

export default defineComponent({
  setup() {
    showOrHideScrollBtn();

    return { scrollToTop, imgScrollToTop };
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scroll-to-top.scss';
</style>
