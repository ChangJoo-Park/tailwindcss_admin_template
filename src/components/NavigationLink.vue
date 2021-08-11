<template>
  <router-link :to=to :exact=exact class="py-3 px-2 rounded flex flex-row items-center space-x-2">
    <div>
      <slot name="icon" />
    </div>
    <div>
      <slot name="label" />
    </div>
    <div class="flex-1"></div>
    <div
      v-if="badge"
      class="bg-red-600 text-red-100 w-6 h-6 font-bold text-sm rounded-full text-center flex flex-col items-center"
    >
      {{ badge }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    to: String | Object,
    exact: {
      type: Boolean,
      default: () => false,
    },
    badge: {
      type: Number,
      default: () => 0,
      validate: (value) => !isNaN(value) && value >= 0,
      required: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.router-link-exact-active {
  @apply bg-gray-900 text-gray-100;
}
</style>