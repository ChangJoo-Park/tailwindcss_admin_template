<template>
  <div class="flex flex-row items-end space-x-2 border-t border-gray-400 pt-2">
    <div class="text-sm">
      Showing <b>1</b> to <b>10</b> of <b>{{ total }}</b> items.
    </div>
    <div class="flex-1"></div>
    <div class="flex flex-row space-x-2">
      <div
        v-for="index in pages"
        :key="index"
        class="
          transition
          duration-75
          px-2
          py-1
          border-b-4
          cursor-pointer
          font-mono
          text-lg
          hover:border-gray-600
        "
        :class="activeClass(index)"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current: Number,
    total: Number,
    itemsPerPage: Number,
  },
  computed: {
    overflowed() {
      return this.total > 10;
    },
    pages() {
      return this.total / this.itemsPerPage;
    },
  },
  methods: {
    activeClass(index) {
      if (index == this.current) {
        return "border-blue-600 text-blue-600 font-bold";
      }
    },
  },
};
</script>

<style>
</style>