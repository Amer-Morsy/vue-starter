<template>TestPage</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'TestPage',
  components: {},
  props: {
    propName: {
      type: String,
      required: true,
      default: 'TestPage',
    },
  },
  setup(props) {
    // Accessing props
    console.log(props);

    // Your component's setup logic here
    const data = ref('data'); // Example data property

    // Your component's computed property here
    const computedProperty = computed(() => {
      // Computed property logic
      return data.value;
    });

    // Your component's methods here
    const someMethod = () => {
      // Method logic
    };

    // Component lifecycle hook: created
    const created = () => {
      // Lifecycle hook logic
    };

    created();

    return {
      data,
      computedProperty,
      someMethod,
    };
  },
});
</script>

<style scoped>
/* Your component's scoped styles here */
</style>
