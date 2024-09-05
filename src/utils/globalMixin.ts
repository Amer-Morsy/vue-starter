import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  data() {
    return {
      z: 'zzzz',
      t: useI18n().t,
    };
  },
  // setup() {
  //   const x = 'zzzzz';
  //   const { t } = useI18n();

  //   return { x, t };
  // },
});
