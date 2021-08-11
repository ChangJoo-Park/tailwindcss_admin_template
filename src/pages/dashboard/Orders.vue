<script setup>
import PageHeader from "../../components/PageHeader.vue";
import AppButton from "../../components/AppButton.vue";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import ExpandableMenuItem from "../../components/ExpandableMenuItem.vue";
import ListView from "../../components/ListView.vue";
import ListItem from "../../components/ListItem.vue";
import Paginator from "../../components/Paginator.vue";
import Badge from "../../components/Badge.vue";

const breadcrumbItems = [
  { label: "Home", to: "/admin" },
  { label: "Orders", to: "/admin/orders" },
];

const ORDERS = [
  {
    id: 1,
    title: "Hair Dryer",
    subtitle: "USA, 10pcs",
    status: "In-Transit",
    leading: "A",
    statusColor: "red",
  },
  {
    id: 2,
    title: "Watch",
    subtitle: "Russia, 1pcs",
    status: "Ordered",
    leading: "A",
    statusColor: "green",
  },
  {
    id: 3,
    title: "Headphone",
    subtitle: "Germany, 100pcs",
    status: "Ordered",
    leading: "A",
    statusColor: "green",
  },
  {
    id: 4,
    title: "Hair Dryer",
    subtitle: "Russia, 353pcs",
    status: "Done",
    leading: "A",
    statusColor: "blue",
  },
  {
    id: 5,
    title: "Vacuum Cleaner",
    subtitle: "Russia, 3pcs",
    status: "In-Transit",
    leading: "A",
    statusColor: "red",
  },
  {
    id: 6,
    title: "Shoes",
    subtitle: "South Korea, 2pcs",
    status: "Done",
    leading: "A",
    statusColor: "blue",
  },
  {
    id: 7,
    title: "Glasses",
    subtitle: "USA, 45pcs",
    status: "In-Transit",
    leading: "A",
    statusColor: "red",
  },
  {
    id: 8,
    title: "Water Filter",
    subtitle: "South Korea, 222pcs",
    status: "Done",
    leading: "A",
    statusColor: "blue",
  },
  {
    id: 9,
    title: "Masks",
    subtitle: "China, 10,000pcs",
    status: "In-Transit",
    leading: "A",
    statusColor: "red",
  },
  {
    id: 10,
    title: "Hair Dryer",
    subtitle: "Germany, 33pcs",
    status: "In-Transit",
    leading: "A",
    statusColor: "red",
  },
];
</script>

<template>
  <breadcrumbs :items="breadcrumbItems" />
  <br />
  <page-header title="Orders ✨" subtitle="Check the status">
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
        <span>New Order</span>
      </app-button>
    </template>
  </page-header>

  <div class="flex flex-row space-x-8">
    <div class="flex flex-col space-y-2">
      <div class="bg-white rounded px-4 py-2 rounded w-64">
        <expandable-menu-item title="Filter by Country 🌏">
          <ul class="pl-4">
            <li>South Korea</li>
            <li>USA</li>
            <li>Germany</li>
            <li>China</li>
            <li>Russia</li>
          </ul>
        </expandable-menu-item>
      </div>
      <div class="bg-white rounded px-4 py-2 rounded">
        <expandable-menu-item title="Filter by Status 🚢">
          <ul class="pl-4">
            <li>Payment</li>
            <li>In Transit</li>
            <li>Done</li>
          </ul>
        </expandable-menu-item>
      </div>
    </div>
    <div class="flex-1">
      <list-view heading="All Orders" description="Orders with no filters">
        <template v-slot:footer>
          <div class="px-2">
            <paginator :current="1" :total="100" :itemsPerPage="10" />
          </div>
        </template>

        <list-item
          v-for="(item, index) in ORDERS"
          :key="item.id"
          :title="item.title"
          :subtitle="item.subtitle"
          :bordered="index < ORDERS.length - 1"
        >
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <div class="w-10 h-10 bg-gray-400" />
            </div>
          </template>
          <template v-slot:trailing>
            <div>
              <badge :color="item.statusColor" :text="item.status" />
            </div>
          </template>
        </list-item>
      </list-view>
    </div>
  </div>
</template>

