<template>
  <div class="flex flex-row items-center px-4 py-3 rounded-sm" :class="colorClass">
    <div class="flex-1">
      {{ content }}
    </div>
    <div class="text-black flex flex-row items-center" v-if="inverted">
      <button @click="onClose"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
    </div>
    <div class="text-white flex flex-row items-center" v-else>
      <button @click="onClose"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    content: {
      type: String,
      default: () => ''
    },
    inverted: {
      type: Boolean,
      default: () => false
    },
    type: {
      type: String,
      default: () => '',
      validator: (value) => {
        return [null, undefined, '', 'primary', 'danger', 'success', 'warning'].includes(value)
      }
    }
  },
  computed: {
    colorClass () {
      let color = ''
      switch(this.type) {
        case 'primary':
          color = 'blue'
          break
        case 'danger':
          color = 'red'
          break
        case 'success':
          color = 'green'
          break
        case 'warning':
          color = 'yellow'
          break;
        default:
          break
      }

      if (this.inverted) {
        return `bg-white shadow text-${color}-400 text-black border-l-4 border-${color}-400`
      }
      return `bg-${color}-400 border-${color}-600 text-white`
    }
  },
  methods: {
    onClose () {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>