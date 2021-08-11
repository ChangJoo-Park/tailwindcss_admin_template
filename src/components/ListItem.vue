<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
  bordered: Boolean,
});

const borderedClass = computed(() => {
  if (props.bordered) {
    return `border-b border-gray-300`;
  }
  return "";
});
</script>

<template>
  <button
    class="
      px-4
      py-2
      flex flex-row
      space-x-4
      items-center
      cursor-pointer
      bg-white
      hover:bg-gray-50
    "
    :class="borderedClass"
  >
    <slot name="leading" />
    <div class="flex-1 text-left">
      <div>{{ title }}</div>
      <div class="text-sm text-gray-400">{{ subtitle }}</div>
    </div>
    <slot name="trailing" />
  </button>
</template>
