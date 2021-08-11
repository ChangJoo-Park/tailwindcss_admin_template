<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  checked: {
    type: Boolean,
    default: () => false,
    required: true,
  },
  indeterminate: {
    type: Boolean,
    default: () => false,
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

const disabledCheckboxClass = computed(() => {
  if (props.disabled) {
    return `border-red-400`;
  }
  return "border-gray-400";
});

const disabledLabelClass = computed(() => {
  if (props.disabled) {
    return `text-red-600`;
  }
  return "text-gray-800";
});
</script>
<template>
  <label for="" class="flex justify-start items-start">
    <div
      class="
        bg-white
        border-2
        rounded
        w-6
        h-6
        flex flex-shrink-0
        justify-center
        items-center
        mr-2
      "
      :class="disabledCheckboxClass"
    >
      <input type="checkbox" class="opacity-0 absolute" :checked="checked" />
      <svg
        v-if="checked && !indeterminate"
        class="w-6 h-6 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
      <svg
        v-if="checked && indeterminate"
        class="w-6 h-6 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20 12H4"
        ></path>
      </svg>
    </div>
    <div class="select-none" :class="disabledLabelClass" v-if="label">
      {{ label }}
    </div>
  </label>
</template>

<style>
input:checked + svg {
  display: block;
}
</style>