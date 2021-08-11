<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center">
    <box title="Please enter your username and password to login">
      <div class="flex flex-col space-y-4">
        <label for="" class="flex flex-col space-y-1">
          <div class="text-sm">Email</div>
          <text-input placeholder="Enter your email" />
        </label>

        <label for="" class="flex flex-col space-y-1">
          <div class="text-sm">Password</div>
          <text-input placeholder="Enter your Password" />
        </label>
      </div>
      <template v-slot:footer>
        <div class="p-4">
          <app-button color="blue" class="rounded">Submit</app-button>
          <div>
            <router-link to="/signup">Sign Up</router-link>
          </div>
        </div>
      </template>
    </box>
  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue";
import Box from "../components/Box.vue";
import TextInput from "../components/TextInput.vue";
export default {
  components: { Box, AppButton, TextInput },
};
</script>
