<script setup>
import { defineProps, onMounted, ref } from "vue";

const props = defineProps({
  title: String,
  expanded: Boolean,
});

const expand = ref(false);

onMounted(() => {
  if (props.expanded) {
    expand.value = props.expanded;
  }
});
</script>

<template>
  <div>
    <div class="flex flex-row items-center cursor-pointer">
      <div class="flex-1 font-bold mr-2" @click="expand = !expand">
        {{ title }}
      </div>
      <svg
        @click="expand = !expand"
        v-if="expand"
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
      <svg
        @click="expand = !expand"
        v-else
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>
    <div v-if="expand">
      <slot />
    </div>
  </div>
</template>

