<template>
  <div class="bg-white rounded mb-2">
    <div class="p-4 font-semibold" v-if="title">
      {{ title }}
    </div>
    <div class="border-b border-gray-200" v-if="title" />
    <div class="p-4">
      <slot />
    </div>
    <slot name="footer" />
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "",
      required: false,
    },
  },
};
</script>