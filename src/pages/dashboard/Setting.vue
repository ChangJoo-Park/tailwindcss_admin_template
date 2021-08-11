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

const breadcrumbItems = [
  { label: "Home", to: "/admin" },
  { label: "Setting", to: "/admin/setting" },
];
</script>
<template>
  <breadcrumbs :items="breadcrumbItems" />
  <br />
  <page-header title="Settings ⚙" subtitle=""> </page-header>
  <div class="flex flex-row space-x-8">
    <div class="w-64">
      <div class="bg-white rounded inline-block select-none w-full">
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
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>Profile</div>
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
            <div>Security</div>
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
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
            <div>Subscription</div>
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
            <div>Notification</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex-1 flex flex-col space-y-4">
      <box title="Profile">
        <div class="flex flex-col space-y-4">
          <div>
            <div class="w-20 h-20 bg-gray-300 rounded-full relative">
              <div class="absolute bottom-0 right-0">
                <div
                  class="
                    w-6
                    h-6
                    bg-white
                    rounded-full
                    flex flex-col
                    justify-center
                    items-center
                    cursor-pointer
                  "
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>Update Photo</div>
          </div>
          <div>
            <label for="">Username</label>
            <text-input />
          </div>
          <div>
            <label for="">Email</label>
            <text-input />
          </div>
          <div>
            <label for="">Bio</label>
            <text-input />
          </div>
          <div class="flex flex-row justify-end">
            <app-button color="gray">Submit</app-button>
          </div>
        </div>
      </box>
      <box title="Security">
        <list-view>
          <list-item title="Password" subtitle="Create or Change password">
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
          <list-item
            title="Two-factor authentication"
            subtitle="Two factor authentication is not enabled yet"
          >
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
          <list-item title="Security Logs" subtitle="You have 3 notifications.">
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
      </box>
      <box title="Subscription">
        <div class="flex flex-col space-y-4 justify-center items-center">
          <div class="bg-gray-300 w-1/2 h-40 opacity-20"></div>
          <div class="text-xl text-gray-600">
            No contracts. No surprise fees.
          </div>
          <div>
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
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
              <span>Subscribe</span>
            </app-button>
          </div>
        </div>
      </box>
      <box title="Notification">
        <list-view>
          <list-item
            title="Automatic Watching"
            subtitle="When you’re given push access to a repository, automatically receive notifications for it."
          >
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
          <list-item
            title="Participating"
            subtitle="Notifications for the conversations you are participating in, or if someone cites you with an @mention."
          >
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
          <list-item
            title="Watching"
            subtitle="Notifications for all repositories, teams, or conversations you’re watching."
          >
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
      </box>
    </div>
  </div>
</template>

