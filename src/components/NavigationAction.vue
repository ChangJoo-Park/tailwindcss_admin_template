<template>
  <router-link :to=to>
    <div>
      <slot />
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'NavigationAction',
  props: {
    to: String | Object,
    badge: {
      type: Boolean,
      default: () => false,
      required: false
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>