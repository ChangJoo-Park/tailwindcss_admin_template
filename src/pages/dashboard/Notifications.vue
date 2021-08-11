<script setup>
import PageHeader from "../../components/PageHeader.vue";
import AppButton from "../../components/AppButton.vue";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import ExpandableMenuItem from "../../components/ExpandableMenuItem.vue";
import Box from "../../components/Box.vue";
import ListView from "../../components/ListView.vue";
import ListItem from "../../components/ListItem.vue";
import Paginator from "../../components/Paginator.vue";
import Badge from "../../components/Badge.vue";
import TextInput from "../../components/TextInput.vue";
import Checkbox from "../../components/Checkbox.vue";
import faker from "faker";

const breadcrumbItems = [
  { label: "Home", to: "/admin" },
  { label: "Notifications", to: "/admin/notifications" },
];

const NOTIFICATIONS = [];

const generateRandomAvatar = () =>
  faker.image.imageUrl() + Date.now() + faker.datatype.number();

for (let i = 0; i < 15; i++) {
  NOTIFICATIONS.push({
    title: faker.lorem.sentence(),
    subtitle: faker.name.findName(),
  });
}
</script>
<template>
  <breadcrumbs :items="breadcrumbItems" />
  <br />
  <div class="flex flex-row space-x-8">
    <div class="w-64">
      <div class="bg-white rounded inline-block w-48 select-none sticky top-20">
        <ul>
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
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              ></path>
            </svg>
            <div>All</div>
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
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              ></path>
            </svg>
            <div>Mentioned</div>
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
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
            <div>Participated</div>
          </li>
        </ul>
      </div>
    </div>
    <list-view heading="Unread" class="w-full">
      <template v-slot:action>
        <app-button>Mark as read</app-button>
      </template>
      <template v-slot:footer>
        <div class="px-2">
          <paginator :current="1" :total="80" :itemsPerPage="15" />
        </div>
      </template>

      <list-item
        :title="item.title"
        :subtitle="item.subtitle"
        v-for="item in NOTIFICATIONS"
        :key="item.id"
      >
        <template v-slot:leading>
          <div>
            <checkbox :checked="false" />
          </div>
        </template>
      </list-item>
    </list-view>
  </div>
</template>

