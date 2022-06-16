<script>
export default {
  name: "UserCard",
  data() {
    return {
      users: [],
    };
  },

  methods: {
    async getUsers() {
      await fetch(
        "https://jsonplaceholder.typicode.com/users?_start=0&_limit=10"
      )
        .then((res) => res.json())
        .then((data) => (this.users = data));
    },
  },

  mounted() {
    this.getUsers();
  },
};
</script>


<template>
  <tr v-for="item in users" :key="item.id">
    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 w-10 h-10">
          <img
            class="w-10 h-10 rounded-full"
            src="https://picsum.photos/id/237/200/300"
            alt=""
          />
        </div>

        <div class="ml-4">
          <div class="text-sm font-medium leading-5 text-gray-900">
            {{ item.username }}
          </div>
          <div class="text-sm leading-5 text-gray-500">
            {{ item.name }}
          </div>
        </div>
      </div>
    </td>

    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
      <div class="text-sm leading-5 text-gray-900">
        {{ item.username }}
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
        >{{ item.email }}</span
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
      {{ item.phone }}
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
      {{ item.website }}
    </td>
  </tr>
</template>