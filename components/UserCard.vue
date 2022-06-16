


<template>
  <tr v-for="(u, index) in users" :key="index">
    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 w-10 h-10">
          <img
            class="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>

        <div class="ml-4">
          <div class="text-sm font-medium leading-5 text-gray-900">
            {{ u.name }}
          </div>
          <div class="text-sm leading-5 text-gray-500">
            {{ u.email }}
          </div>
        </div>
      </div>
    </td>

    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
      <div class="text-sm leading-5 text-gray-900">
        {{ u.title }}
      </div>
      <div class="text-sm leading-5 text-gray-500">
        {{ u.title2 }}
      </div>
    </td>

    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
      <span
        class="
          inline-flex
          px-2
          text-xs
          font-semibold
          leading-5
          text-green-800
          bg-green-100
          rounded-full
        "
        >{{ u.status }}</span
      >
    </td>

    <td
      class="
        px-6
        py-4
        text-sm
        leading-5
        text-gray-500
        border-b border-gray-200
        whitespace-nowrap
      "
    >
      {{ u.role }}
    </td>

    <td
      class="
        px-6
        py-4
        text-sm
        font-medium
        leading-5
        text-right
        border-b border-gray-200
        whitespace-nowrap
      "
    >
      <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
    </td>
  </tr>
</template>