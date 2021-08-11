<template>
  <div class="flex flex-row space-x-2 items-center text-sm">
    <div v-for="(value, index) in items" :key="index">
      <template v-if="index == items.length - 1">
        <span class="flex flex-row">{{ value.label }}</span>
      </template>
      <span v-if="index < items.length - 1" class="flex flex-row flex flex-row items-center space-x-2">
        <router-link
          class="font-bold"
          :to="value.to"
        >
          {{ value.label }}
        </router-link>
        <span class="flex flex-row items-center" >
          <svg
            class="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
};
</script>

<style>
</style>