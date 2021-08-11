<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  heading: {
    type: String,
    default: () => "",
    required: false,
  },
  description: {
    type: String,
    default: () => "",
    required: false,
  },
  loose: {
    type: Boolean,
    default: () => false,
    required: false,
  },
});

const listItemsClass = computed(() => {
  if (props.loose) {
    return "space-y-4";
  } else {
    return "space-y-0";
  }
});
</script>

<template>
  <div class="bg-white rounded border-gray-300 overflow-hidden">
    <div
      v-if="heading || description"
      class="p-4 border-b border-gray-300 flex flex-row"
    >
      <div class="flex-1">
        <div v-if="heading" class="font-semibold text-gray-900">
          {{ heading }}
        </div>
        <div v-if="description" class="text-sm text-gray-600">
          {{ description }}
        </div>
      </div>
      <slot name="action" />
    </div>

    <div class="flex flex-col" :class="listItemsClass">
      <slot />
    </div>
    <slot name="footer" />
  </div>
</template>
