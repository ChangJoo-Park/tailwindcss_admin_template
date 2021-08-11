<script setup>
import ChatMessage from "../../components/ChatMessage.vue";
import TextInput from "../../components/TextInput.vue";
import Badge from "../../components/Badge.vue";
import faker from "faker";
import dayjs from "dayjs";

const MESSAGES = [];
const generateRandomAvatar = () =>
  faker.image.imageUrl() + Date.now() + faker.datatype.number();

for (let index = 0; index < 30; index++) {
  MESSAGES.push({
    avatar: generateRandomAvatar(),
    body: faker.lorem.sentences(),
    created: dayjs(faker.date.past()).format("YYYY.MM.DD HH:mm"),
  });
}
</script>

<template>
  <div class="flex flex-row space-x-8 h-full">
    <div class="w-64">
      <div class="sticky top-28 bg-white rounded">
        <ul>
          <li
            class="
              cursor-pointer
              px-4
              py-2
              flex flex-row
              justify-between
              space-x-2
              items-center
              hover:bg-gray-50
            "
          >
            <div>#general</div>
            <badge color="red" text="20" />
          </li>
          <li
            class="
              cursor-pointer
              px-4
              py-2
              flex flex-row
              space-x-2
              items-center
              hover:bg-gray-50
            "
          >
            <div>#random</div>
          </li>
          <li
            class="
              cursor-pointer
              px-4
              py-2
              flex flex-row
              space-x-2
              items-center
              hover:bg-gray-50
            "
          >
            <div>#project</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex flex-col space-y-2 flex-1 overflow-y-hidden h-full">
        <chat-message v-for="(item, index) in MESSAGES" :key="index">
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <img :src="item.avatar" class="w-10 h-10" />
            </div>
          </template>
          <template v-slot:message>
            <div>{{ item.body }}</div>
          </template>
          <template v-slot:hint>
            <div>{{ item.created }}</div>
          </template>
          <template v-slot:trailing></template>
        </chat-message>
      </div>

      <div
        class="w-full sticky bottom-0 px-2 py-4 mt-4 bg-white shadow rounded"
      >
        <text-input placeholder="Enter message." />
      </div>
    </div>
  </div>
</template>
