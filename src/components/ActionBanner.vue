<script setup>
import AppButton from "./AppButton.vue";
import { defineProps } from "vue";
const props = defineProps({
  message: String,
});
</script>
<template>
  <div class="px-4 py-6 flex flex-row items-center shadow-lg rounded">
    <div class="bg-white pr-4" style="word-break: keep-all">
      {{ message }}
    </div>
    <div class="flex-1"></div>
    <div class="flex flex-row space-x-4">
      <app-button @click="$emit('decline')">Decline</app-button>
      <app-button color="blue" @click="$emit('accept')">Allow</app-button>
    </div>
  </div>
</template>

