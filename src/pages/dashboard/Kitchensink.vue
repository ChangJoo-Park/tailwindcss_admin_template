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
import { ref } from "@vue/reactivity";

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
</script>

<template>
  <div>
    <section-title title="Banner" />
    <banner
      class="bg-purple-500 p-4"
      title="Good afternoon, Acme Inc. 👋"
      subtitle="Here is what’s happening with your projects today:"
    />
    <section-title title="Page Title" />
    <page-header title="Orders ✨" subtitle="What we think, we become">
      <template v-slot:actions>
        <app-button color="purple">Add Order</app-button>
      </template>
    </page-header>

    <section-title title="Box" />
    <div class="flex flex-row space-x-4">
      <box class="flex-1" title="Direct VS Indirect">
        SOURCE VISITORS REVENUES SALES CONVERSION Github.com 2.4K $3,877 267
        4.7% Twitter 2.2K $3,426 249 4.4% Google (organic) 2.0K $2,444 224 4.2%
        Vimeo.com 1.9K $2,236 220 4.2% Indiehackers.com 1.7K $2,034 204 3.9%
      </box>
      <box class="flex-1" title="Top Channels">
        <app-table :columns="incomeAndExpensesColumns" />
        <template v-slot:footer> </template>
      </box>
    </div>
    <section-title title="Badges" />
    <box>
      <div class="flex flex-row flex-wrap space-x-2">
        <badge color="blue" text="badge" />
        <badge color="red" text="badge" />
        <badge color="yellow" text="badge" />
        <badge color="purple" text="badge" />
      </div>
    </box>
    <section-title title="Buttons" />
    <box>
      <div class="flex flex-row flex-wrap space-x-2">
        <app-button @click="onClick">Button</app-button>
        <app-button color="blue" @click="onClick">Button</app-button>
        <app-button color="red" @click="onClick">Button</app-button>
        <app-button color="yellow" @click="onClick">Button</app-button>
        <app-button color="gray" @click="onClick">Button</app-button>
        <app-button color="indigo" @click="onClick">Button</app-button>
        <app-button color="purple" @click="onClick">
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
          <div>Add Customer</div>
        </app-button>
      </div>
    </box>

    <section-title title="Alert" />
    <box>
      <div class="flex flex-col space-y-2">
        <alert @close="onClose" type="primary" content="Hello World" />
        <alert @close="onClose" type="danger" content="Hello World" />
        <alert @close="onClose" type="success" content="Hello World" />
        <alert @close="onClose" type="warning" content="Hello World" />

        <alert @close="onClose" type="primary" inverted content="Hello World" />
        <alert @close="onClose" type="danger" inverted content="Hello World" />
        <alert @close="onClose" type="success" inverted content="Hello World" />
        <alert @close="onClose" type="warning" inverted content="Hello World" />
      </div>
    </box>

    <section-title title="Breadcrumbs" />
    <box>
      <div>
        <breadcrumbs :items="breadcrumbItems" />
      </div>
    </box>
    <section-title title="Paginator" />
    <box>
      <paginator :current="1" :total="100" :itemsPerPage="10" />
    </box>
    <section-title title="Dropdown Menu" />
    <box>
      <dropdown-menu />
    </box>
    <section-title title="Stats" />
    <div class="flex flex-row space-x-4">
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
    <section-title title="Dialog" />
    <box>
      <app-dialog
        class="w-64"
        title="Hello World"
        content="Use Dialog with app-dialog"
      >
        <template v-slot:footer>
          <div class="flex flex-row space-x-2 justify-end">
            <app-button>Cancel</app-button>
            <app-button color="blue">Confirm</app-button>
          </div>
        </template>
      </app-dialog>
      <br />
      <app-dialog
        class="w-96"
        title="Are you sure?"
        content="You can't recover after destroy"
      >
        <template v-slot:icon>
          <div class="p-4 text-red-600">
            <svg
              class="w-12 h-12"
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
          </div>
        </template>
        <template v-slot:footer>
          <div class="flex flex-row space-x-2 justify-end">
            <app-button>No</app-button>
            <app-button color="red">Yes</app-button>
          </div>
        </template>
      </app-dialog>
    </box>

    <section-title title="Expandable Menu Item" />
    <box>
      <div class="w-1/3">
        <expandable-menu-item title="Hello World">
          <ul class="pl-4">
            <li>Accessories</li>
            <li>Camera and Photo</li>
            <li>Cell phones</li>
            <li>GPS and Navigation</li>
          </ul>
        </expandable-menu-item>
        <expandable-menu-item title="Hello World" />
        <expandable-menu-item title="Hello World" />
        <expandable-menu-item title="Hello World" />
      </div>
    </box>

    <section-title title="List" />
    <box>
      <list-view
        heading="User database"
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
            <app-button color="purple">Show All</app-button>
          </div>
        </template>
        <list-item title="Jean Marc" subtitle="Developer" bordered>
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <img
                src="https://www.tailwind-kit.com/images/person/6.jpg"
                class="w-10 h-10"
              />
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
        <list-item title="Jean Marc" subtitle="Developer" bordered>
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <img
                src="https://www.tailwind-kit.com/images/person/6.jpg"
                class="w-10 h-10"
              />
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
        <list-item title="Charlie Moi" subtitle="Designer" bordered>
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <img
                src="https://www.tailwind-kit.com/images/person/10.jpg"
                class="w-10 h-10"
              />
            </div>
          </template>
          <template v-slot:trailing>
            <div>
              <badge color="green" text="On-Track" />
            </div>
          </template>
        </list-item>
        <list-item title="Jean Marc" subtitle="Developer">
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <img
                src="https://www.tailwind-kit.com/images/person/6.jpg"
                class="w-10 h-10"
              />
            </div>
          </template>
          <template v-slot:trailing>
            <div>
              <badge color="red" text="To do" />
            </div>
          </template>
        </list-item>
      </list-view>
    </box>

    <section-title title="List with Paginator" />
    <box>
      <list-view
        heading="User database"
        description="Details and informations about user."
      >
        <template v-slot:footer>
          <div class="px-2 py-0">
            <paginator :current="1" :total="100" :itemsPerPage="10" />
          </div>
        </template>
        <list-item title="Jean Marc" subtitle="Developer" bordered>
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <img
                src="https://www.tailwind-kit.com/images/person/6.jpg"
                class="w-10 h-10"
              />
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
        <list-item title="Jean Marc" subtitle="Developer" bordered>
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <img
                src="https://www.tailwind-kit.com/images/person/6.jpg"
                class="w-10 h-10"
              />
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
        <list-item title="Charlie Moi" subtitle="Designer" bordered>
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <img
                src="https://www.tailwind-kit.com/images/person/10.jpg"
                class="w-10 h-10"
              />
            </div>
          </template>
          <template v-slot:trailing>
            <div>
              <badge color="green" text="On-Track" />
            </div>
          </template>
        </list-item>
        <list-item title="Jean Marc" subtitle="Developer">
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <img
                src="https://www.tailwind-kit.com/images/person/6.jpg"
                class="w-10 h-10"
              />
            </div>
          </template>
          <template v-slot:trailing>
            <div>
              <badge color="red" text="To do" />
            </div>
          </template>
        </list-item>
      </list-view>
    </box>

    <section-title title="Text Input" />
    <box>
      <form class="flex flex-col space-y-2">
        <div>
          <text-input placeholder="Name" />
        </div>
        <div>
          <label>
            Username
            <text-input placeholder="Enter username" />
          </label>
        </div>
      </form>
    </box>

    <section-title title="Chat" />
    <box title="Chat with Poppins">
      <div class="flex flex-col space-y-1">
        <chat-message>
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <img
                src="https://www.tailwind-kit.com/images/person/10.jpg"
                class="w-10 h-10"
              />
            </div>
          </template>
          <template v-slot:message>
            <div>Message From Mars</div>
          </template>
          <template v-slot:trailing></template>
        </chat-message>
        <chat-message backgroundColor="blue" color="gray">
          <template v-slot:leading>
            <div class="rounded-full overflow-hidden">
              <img
                src="https://www.tailwind-kit.com/images/person/6.jpg"
                class="w-10 h-10"
              />
            </div>
          </template>
          <template v-slot:message>
            <div>Message From Mars</div>
          </template>
          <template v-slot:trailing></template>
        </chat-message>
      </div>
    </box>

    <section-title title="Progress" />
    <box>
      <div class="flex flex-col space-y-2">
        <app-progress :value="40" backgroundColor="gray" color="red" />
        <app-progress :value="30" animate color="yellow" />
        <app-progress :value="80" color="blue" animate rounded />
      </div>
    </box>

    <section-title title="Toolbar" />
    <box>
      <toolbar>
        <toolbar-button> <div class="w-6 h-6">B</div> </toolbar-button>
        <toolbar-button active>
          <div class="w-6 h-6"><i>I</i></div>
        </toolbar-button>
        <toolbar-button>
          <div class="w-6 h-6"><s>U</s></div>
        </toolbar-button>
        <toolbar-seperator />
        <toolbar-button>
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
        </toolbar-button>
        <toolbar-button active>
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
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            ></path>
          </svg>
        </toolbar-button>
        <toolbar-spacer />
        <toolbar-button>
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
        </toolbar-button>
      </toolbar>
    </box>

    <section-title title="Checkbox" />
    <box>
      <div class="flex flex-col space-y-2">
        <checkbox
          :checked="checked"
          label="Clickable"
          @click="checked = !checked"
        />
        <checkbox checked label="Checked" />
        <checkbox checked indeterminate label="Indeterminate Checked" />
        <checkbox :checked="false" label="Not Checked" />
        <checkbox :checked="false" disabled label="Disabled" />
        <checkbox :checked="true" disabled label="Disabled" />
      </div>
    </box>
    <section-title title="Radio Group" />
    <box>
      <div class="mb-4">Selected : {{ radioValue }}</div>
      <div class="flex flex-row space-x-4">
        <radio
          label="Private"
          name="contact"
          :checked="radioValue == 'Private'"
          @click="radioValue = 'Private'"
        />
        <radio
          label="Public"
          name="contact"
          :checked="radioValue == 'Public'"
          @click="radioValue = 'Public'"
        />
      </div>
    </box>
    <section-title title="Switch" />
    <box>
      <div class="flex flex-col space-y-2">
        <div class="flex flex-row space-x-2">
          <app-switch
            :checked="switchValue"
            @click="switchValue = !switchValue"
          />
          <div>Clickable : value -> {{ switchValue }}</div>
        </div>
        <div class="flex flex-row space-x-2">
          <app-switch checked />
          <div>On</div>
        </div>
        <div class="flex flex-row space-x-2">
          <app-switch :checked="false" />
          <div>Off</div>
        </div>
      </div>
    </box>
    <section-title title="Action Banner" />
    <box>
      <action-banner
        message="This website uses cookies to ensure you get the best experience on our
      website."
      />
    </box>
  </div>
</template>

