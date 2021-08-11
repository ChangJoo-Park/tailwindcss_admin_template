<template>
  <button
    class="disabled:opacity-50 transition-all duration-200 rounded px-3 py-1 cursor-pointer select-none flex flex-row items-center space-x-1 shadow hover:shadow-none"
    :class="[colorClass, hoverColorClass]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    color: {
      type: String,
      default: () => ""
    }
  },
  computed: {
    colorClass() {
      if (!this.color) return `bg-transparent text-black`
      return `bg-${this.color}-600 text-white disabled:bg-gray-600`
    },
    hoverColorClass() {
      if (!this.color) return `bg-transparent text-black`
      return `hover:bg-${this.color}-800`
    }
  }
}
</script>

<style>

</style>