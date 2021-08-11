<script setup>
import { defineProps, nextTick, onMounted, ref } from "vue";

const props = defineProps({
  value: {
    type: Number,
    validator: (value) => value <= 100 && value >= 0,
  },
  rounded: {
    type: Boolean,
    default: () => false,
  },
  animate: {
    type: Boolean,
    default: () => false,
  },
  backgroundColor: {
    type: String,
    default: () => "gray",
    required: false,
  },
  color: {
    type: String,
    default: () => "red",
    required: false,
  },
});

const percentage = ref(0);

onMounted(() => {
  if (props.animate) {
    const tick = 200;
    const timeout = setTimeout(() => {
      percentage.value = props.value;
      clearTimeout(timeout);
    }, tick);
  } else {
    percentage.value = props.value;
  }
});
</script>
<template>
  <div class="flex flex-row h-5">
    <div
      class="flex-1 overflow-hidden"
      :class="[
        `bg-${backgroundColor}-200`,
        rounded ? 'rounded-full' : 'rounded-none',
      ]"
    >
      <div
        class="h-full transition-all delay-100 duration-200"
        :style="{ width: `${percentage}%` }"
        :class="`bg-${color}-600`"
      ></div>
    </div>
  </div>
</template>