<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  checked: {
    type: Boolean,
    default: () => false,
    required: true,
  },
  name: {
    type: String,
    default: () => "",
    required: false,
  },
  label: {
    type: String,
    default: () => "",
    required: false,
  },
  disabled: {
    type: Boolean,
    default: () => false,
    required: false,
  },
});
</script>
<template>
  <label for="">
    <div class="flex flex-row space-x-1">
      <div class="bg-white">
        <div
          v-if="checked"
          class="
            w-6
            h-6
            border-2 border-gray-400
            rounded-full
            flex flex-col
            justify-center
            items-center
          "
        >
          <div class="w-3 h-3 bg-gray-600 rounded-full" />
        </div>
        <div v-else class="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
        <input type="radio" :name="name" class="opacity-0 w-6 h-6 absolute" />
      </div>
      <div class="select-none" :class="disabledLabelClass" v-if="label">
        {{ label }}
      </div>
    </div>
  </label>
</template>
