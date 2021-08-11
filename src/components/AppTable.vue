<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead>
      <tr class="">
        <th
          v-for="column in columns"
          :key="column.key"
          scope="col"
          class="text-left text-xs font-semibold px-1 text-gray-500 uppercase tracking-wider"
        >
        <div class="py-3">
          {{column.label}}
        </div>
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr class="px-6 py-4 whitespace-nowrap">
        <td class="text-sm font-medium text-gray-900 flex flex-row items-center py-2 px-1">
          <div class="inline-block w-12 h-12 bg-gray-50 rounded-full mr-2"></div>
          <div class="flex-1">Intro to CSS</div>
        </td>
        <td class="text-sm font-medium text-gray-900 px-1">Adam</td>
        <td class="text-sm font-medium text-gray-900 px-1">858</td>
      </tr>
      <tr class="bg-emerald-200">
        <td class="text-sm font-medium text-gray-900 flex flex-row items-center py-2">
          <div class="inline-block w-12 h-12 bg-gray-50 rounded-full mr-2"></div>
          <div class="flex-1">
            A Long and Winding Tour of the History of UI Frameworks and Tools and
            the Impact on Design
          </div>
        </td>
        <td class="text-sm font-medium text-gray-900 px-1">Adam</td>
        <td class="text-sm font-medium text-gray-900 px-1">112</td>
      </tr>
      <tr>
        <td class="text-sm font-medium text-gray-900 flex flex-row items-center py-2">
          <div class="inline-block w-12 h-12 bg-gray-50 rounded-full mr-2"></div>
          <div class="flex-1">Intro to JavaScript</div>
        </td>
        <td class="text-sm font-medium text-gray-900 px-1">Chris</td>
        <td class="text-sm font-medium text-gray-900 px-1">1,280</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "AppTable",
  props: {
    columns: {
      type: Array,
      default: () => [],
      validator: (columns) =>
        columns.every(
          (column) =>
            typeof column === "object" &&
            column.hasOwnProperty("key") &&
            column.hasOwnProperty("label")
        ),
    },
  },
};
</script>

<style>
</style>