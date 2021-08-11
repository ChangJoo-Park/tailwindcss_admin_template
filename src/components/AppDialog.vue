<template>
  <div class="shadow bg-white flex flex-col">
    <div class="flex flex-row space-x-4 border-b border-gray-300">
      <slot name="icon" />
      <div class="flex-1 flex flex-col space-y-2 p-4">
        <div class="font-bold text-lg">{{title}} 헬로월드</div>
        <div>{{content}}</div>
      </div>
    </div>
    <div class="p-4">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDialog',
  props: {
    title: String,
    content: String
  }
}
</script>

<style>

</style>