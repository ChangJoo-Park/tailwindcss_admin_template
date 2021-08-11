<script>
export default {
  props: {
    color: {
      type: String,
      default: () => "green",
    },
    text: {
      type: String,
      default: () => "",
      required: true,
    },
  },
  computed: {
    backgroundClass() {
      return `bg-${this.color}-200`;
    },
    textClass() {
      return `text-${this.color}-600`;
    },
  },
};
</script>

<template>
  <div class="px-2 py-1 rounded-xl" :class="backgroundClass">
    <div class="text-xs" :class="textClass">{{ text }}</div>
  </div>
</template>

