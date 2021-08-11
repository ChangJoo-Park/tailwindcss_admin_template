<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  checked: {
    type: Boolean,
    default: () => false,
    required: false,
  },
});

const activeClass = computed(() => {
  if (props.checked) {
    return `bg-blue-400`;
  }
  return `bg-gray-300`;
});

const activeSwitchClass = computed(() => {
  if (props.checked) {
    return `translate-x-6`;
  }
  return `translate-x-0`;
});
</script>

<template>
  <div
    class="rounded-full w-12 h-6 flex flex-row items-center"
    :class="activeClass"
  >
    <div
      class="
        transition-transform
        duration-75
        transform
        rounded-full
        border border-gray-300
        bg-white
      "
      :class="activeSwitchClass"
      style="width: 1.35rem; height: 1.35rem"
    />
  </div>
</template>