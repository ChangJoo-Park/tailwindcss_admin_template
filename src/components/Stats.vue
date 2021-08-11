<template>
  <div class="flex flex-row rounded p-4 items-center">
    <div class="flex-1">
      <div class="tracking-tighter text-gray-400 text-sm">
        {{ title }}
      </div>
      <div class="font-bold text-2xl">
        {{ stat }}
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    stat: String,
  },
};
</script>
