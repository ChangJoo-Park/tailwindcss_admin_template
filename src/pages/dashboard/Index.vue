<script setup>
import Alert from "../../components/Alert.vue";
import AppButton from "../../components/AppButton.vue";
import AppTable from "../../components/AppTable.vue";
import ActionBanner from "../../components/ActionBanner.vue";
import Badge from "../../components/Badge.vue";
import Banner from "../../components/Banner.vue";
import Box from "../../components/Box.vue";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import SectionTitle from "../../components/SectionTitle.vue";
import PageHeader from "../../components/PageHeader.vue";
import Paginator from "../../components/Paginator.vue";
import DropdownMenu from "../../components/DropdownMenu.vue";
import Stats from "../../components/Stats.vue";
import AppDialog from "../../components/AppDialog.vue";
import ExpandableMenuItem from "../../components/ExpandableMenuItem.vue";
import ListView from "../../components/ListView.vue";
import ListItem from "../../components/ListItem.vue";
import TextInput from "../../components/TextInput.vue";
import ChatMessage from "../../components/ChatMessage.vue";
import AppProgress from "../../components/AppProgress.vue";
import Toolbar from "../../components/Toolbar.vue";
import ToolbarButton from "../../components/ToolbarButton.vue";
import ToolbarSeperator from "../../components/ToolbarSeperator.vue";
import ToolbarSpacer from "../../components/ToolbarSpacer.vue";
import Checkbox from "../../components/Checkbox.vue";
import Radio from "../../components/Radio.vue";
import AppSwitch from "../../components/AppSwitch.vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const incomeAndExpensesColumns = [
  { key: "source", label: "SOURCE" },
  { key: "visitor", label: "VISITOR" },
  { key: "revenue", label: "REVENUE" },
];

const onClick = () => {
  console.log(new Date());
};

const onClose = () => {
  console.log("close");
};

const onListClick = () => {
  console.log("on list click");
};

const breadcrumbItems = [
  { label: "Home", to: "/" },
  { label: "Second Level", to: "/" },
  { label: "Third Level", to: "/" },
];

const pagination = {};

const checked = ref(false);
const radioValue = ref("Public");
const switchValue = ref(false);
const needCookieAccept = ref(true);
// For chart.js
const emailDoughnutChart = {
  id: "doughnut",
  type: "doughnut",
  data: {
    labels: ["Open", "Bounce", "Unsubscribe"],
    datasets: [
      {
        backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
        data: [80, 5, 20],
      },
    ],
  },
};

const emailLineChart = {
  id: "line_email",
  type: "line",
  data: {
    labels: ["2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Open",
        backgroundColor: ["#41B883"],
        borderColor: "#41B883",
        data: [100, 333, 213, 1435],
        tension: 0.1,
      },
      {
        label: "Bounce",
        backgroundColor: ["#E46651"],
        borderColor: "#E46651",
        data: [20, 30, 25, 48],
        tension: 0.1,
      },
      {
        label: "Unsubscribe",
        backgroundColor: ["#00D8FF"],
        borderColor: "#00D8FF",
        data: [80, 120, 40, 130],
        tension: 0.1,
      },
    ],
  },
};

const totalShipment = {
  id: "total_shipment",
  type: "line",
  data: {
    labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "Shipment",
        data: [80, 100, 70, 80, 120, 80],
        fill: false,
        backgroundColor: ["#41B883"],
        borderColor: "#41B883",
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
};

const dailySales = {
  id: "daily_sales",
  type: "bar",
  data: {
    labels: ["USA", "GER", "AUS", "UK", "RUS", "BRA"],
    datasets: [
      {
        label: "Sales by Country",
        data: [55, 20, 10, 80, 100, 50],
        fill: false,
        backgroundColor: ["#60A5FA"],
        borderColor: "#60A5FA",
      },
    ],
  },
};

const completedOrders = {
  id: "completed_orders",
  type: "line",
  data: {
    labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
    datasets: [
      {
        label: "Orders",
        data: [90, 30, 60, 20, 90],
        fill: false,
        backgroundColor: ["#DC2626"],
        borderColor: "#DC2626",
        tension: 0.5,
      },
    ],
  },
  options: {
    scales: {
      linear: {
        min: 0,
      },
    },
  },
};

const requestSupports = [
  {
    name: "Mark Otto",
    email: "ottoto@example.com",
    status: "To do",
    statusColor: "yellow",
  },
  {
    name: "Jacob Thornton",
    email: "thornton@example.com",
    status: "In Progress",
    statusColor: "blue",
  },
  {
    name: "Larry the Bird",
    email: "larry@example.com",
    status: "Done",
  },
  {
    name: "Joseph May",
    email: "may@example.com",
    status: "Done",
    statusColor: "green",
  },
  {
    name: "Peter Horadnia",
    email: "horadnia@example.com",
    status: "Cancel",
    statusColor: "red",
  },
];
</script>

<template>
  <banner
    class="bg-purple-500 p-4"
    title="Good afternoon, Acme Inc. 👋"
    subtitle="Here is what’s happening with your projects today:"
  />

  <div class="flex flex-col space-y-4">
    <!-- Stats -->
    <div
      class="
        flex flex-col
        lg:flex-row
        lg:space-x-4
        space-y-2
        lg:space-y-0
        flex-wrap
      "
    >
      <stats class="bg-white flex-1" title="USERS" stat="684">
        <svg
          class="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      </stats>
      <stats class="bg-white flex-1" title="RETENTION" stat="451">
        <svg
          class="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      </stats>
      <stats class="bg-white flex-1" title="BOUNCE RATE" stat="40.5%">
        <svg
          class="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          ></path>
        </svg>
      </stats>
      <stats class="bg-white flex-1" title="SESSION DURATION" stat="1m 24s">
        <svg
          class="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
          ></path>
        </svg>
      </stats>
    </div>
    <div class="flex flex-row space-x-4 w-full">
      <box title="Email Statistics" style="flex: 1">
        <vue3-chart-js
          :id="emailDoughnutChart.id"
          :type="emailDoughnutChart.type"
          :data="emailDoughnutChart.data"
        ></vue3-chart-js>
      </box>
      <box style="flex: 2" title="Users Behavior">
        <vue3-chart-js
          :id="emailLineChart.id"
          :type="emailLineChart.type"
          :data="emailLineChart.data"
        ></vue3-chart-js>
      </box>
    </div>
    <div class="flex flex-row space-x-4 overflow-hidden w-full">
      <box title="Total Shipment" class="flex-1">
        <vue3-chart-js
          :id="totalShipment.id"
          :type="totalShipment.type"
          :data="totalShipment.data"
        ></vue3-chart-js>
      </box>
      <box title="Daily Sales" class="flex-1">
        <vue3-chart-js
          :id="dailySales.id"
          :type="dailySales.type"
          :data="dailySales.data"
        ></vue3-chart-js>
      </box>
      <box title="Completed Orders" class="flex-1">
        <vue3-chart-js
          :id="completedOrders.id"
          :type="completedOrders.type"
          :data="completedOrders.data"
        ></vue3-chart-js>
      </box>
    </div>
    <div>
      <list-view
        heading="Support Requests"
        description="Details and informations about user."
      >
        <template v-slot:footer>
          <div
            class="
              border-t border-gray-300
              px-4
              py-4
              flex flex-row
              items-center
              justify-center
            "
          >
            <app-button color="blue">Show All</app-button>
          </div>
        </template>
        <list-item
          v-for="(item, index) in requestSupports"
          :key="index"
          :title="item.name"
          :subtitle="item.email"
          :bordered="index != requestSupports.length - 1"
        >
          <template v-slot:trailing>
            <div>
              <badge :color="item.statusColor" :text="item.status" />
            </div>
          </template>
        </list-item>
      </list-view>
    </div>
  </div>

  <div class="fixed bottom-0 left-0">
    <div class="bg-white border-t border-gray-600">
      <action-banner
        v-if="needCookieAccept"
        message="This website uses cookies to ensure you get the best experience on our
        website."
        class="w-screen"
        @decline="needCookieAccept = false"
        @accept="needCookieAccept = false"
      />
    </div>
  </div>
</template>

