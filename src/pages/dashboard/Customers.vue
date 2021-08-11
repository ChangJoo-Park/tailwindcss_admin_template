<script setup>
import PageHeader from "../../components/PageHeader.vue";
import AppButton from "../../components/AppButton.vue";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import ExpandableMenuItem from "../../components/ExpandableMenuItem.vue";
import ListView from "../../components/ListView.vue";
import ListItem from "../../components/ListItem.vue";
import Paginator from "../../components/Paginator.vue";
import Badge from "../../components/Badge.vue";
import TextInput from "../../components/TextInput.vue";
import Checkbox from "../../components/Checkbox.vue";
import Radio from "../../components/Radio.vue";
import faker from "faker";
var randomName = faker.name.findName(); // Rowan Nikolaus
const breadcrumbItems = [
  { label: "Home", to: "/admin" },
  { label: "Customers", to: "/admin/customers" },
];

const CUSTOMERS = [];

const generateRandomAvatar = () =>
  faker.image.imageUrl() + Date.now() + faker.datatype.number();

for (let i = 0; i < 10; i++) {
  CUSTOMERS.push({
    avatar: generateRandomAvatar(),
    title: faker.name.findName(),
    subtitle: faker.company.companyName(),
  });
}
</script>

<template>
  <breadcrumbs :items="breadcrumbItems" />
  <br />
  <page-header title="Customers 👦🧒" subtitle="">
    <template v-slot:actions>
      <app-button color="blue">
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span>New Customer</span>
      </app-button>
    </template>
  </page-header>

  <div class="flex flex-row space-x-8">
    <div class="flex flex-col space-y-2 w-64">
      <div class="bg-white rounded px-4 py-2 rounded">
        <expandable-menu-item title="Filter by Roles 🐱‍🏍" expanded>
          <ul class="pl-4 pt-2 flex flex-col space-y-1">
            <checkbox checked label="Loyal Customers" />
            <checkbox :checked="false" label="Wandering Consumers" />
            <checkbox :checked="false" label="Impulse Shoppers" />
            <checkbox :checked="false" label="Bargain Hunters" />
          </ul>
        </expandable-menu-item>
      </div>
      <div class="bg-white rounded px-4 py-2 rounded">
        <expandable-menu-item title="Filter by Validate ✉" expanded>
          <ul class="pl-4 pt-2 flex flex-col space-y-1">
            <checkbox checked label="Valid" />
            <checkbox :checked="false" label="Invalid" />
            <checkbox :checked="false" label="Expired" />
          </ul>
        </expandable-menu-item>
      </div>
    </div>
    <div class="flex-1">
      <list-view heading="All Customers" description="">
        <template v-slot:action>
          <text-input placeholder="Search by name, country" />
        </template>
        <template v-slot:footer>
          <div class="px-2">
            <paginator :current="1" :total="80" :itemsPerPage="10" />
          </div>
        </template>

        <list-item
          v-for="(item, index) in CUSTOMERS"
          :key="item.id"
          :title="item.title"
          :subtitle="item.subtitle"
          :bordered="index < CUSTOMERS.length - 1"
        >
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <div>
                <img :src="`${item.avatar}?${Date.now()}`" class="w-10 h-10" />
              </div>
            </div>
          </template>
          <template v-slot:trailing>
            <div>
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
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </template>
        </list-item>
      </list-view>
    </div>
  </div>
</template>

