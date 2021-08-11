<template>
  <div class="text-xl font-semibold mb-4">{{ title }}</div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: () => '',
      required: true
    }
  }
}
</script>

<style>

</style>