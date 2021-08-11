<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  backgroundColor: String,
  color: String,
});

const messageClass = computed(() => {
  if (!props.backgroundColor && !props.color) {
    return `bg-white-400 text-gray-900`;
  }

  if (props.backgroundColor && !props.color) {
    return `bg-${props.backgroundColor}-400 text-black border-${props.backgroundColor}-300`;
  }

  return `bg-${props.backgroundColor}-400 text-${props.color}-600 border-${props.backgroundColor}-300`;
});
</script>
<template>
  <div class="flex flex-row space-x-2">
    <div>
      <slot name="leading" />
    </div>
    <div class="flex-1">
      <div
        class="
          border
          rounded-r-lg rounded-b-lg rounded-tl-none
          p-2
          bg-white
          text-gray-900
        "
        :class="messageClass"
        style="word-break: keep-all"
      >
        <slot name="message" />
      </div>
      <div class="text-sm text-gray-400 hover:text-gray-600">
        <slot name="hint" />
      </div>
    </div>
    <slot name="trailing" />
  </div>
</template>