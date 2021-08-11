<template>
  <div class="flex flex-row justify-between items-center mb-8">
    <div class="flex-1 flex flex-col space-y-2">
      <div class="text-3xl font-bold">
        {{ title }}
      </div>
      <div v-if="subtitle" class="text-lg text-gray-600">
        {{ subtitle }}
      </div>
    </div>
    <div>
      <slot name="actions"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: () => '',
      required: false
    }
  }
}
</script>