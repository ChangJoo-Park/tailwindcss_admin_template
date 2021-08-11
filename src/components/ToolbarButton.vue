<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  active: {
    type: Boolean,
    default: () => false,
    required: false,
  },
});

const activeClass = computed(() => {
  if (props.active) {
    return `bg-purple-400 text-purple-100`;
  } else {
    return `text-gray-600`;
  }
});
</script>

<template>
  <button
    class="
      p-1
      rounded-lg
      hover:bg-purple-400
      hover:text-purple-100
      hover:opacity-80
    "
    :class="activeClass"
  >
    <slot />
  </button>
</template>