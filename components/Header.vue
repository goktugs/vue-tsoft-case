
<script>
import LanguageInputVue from "./LanguageInput.vue";
export default {
  name: "Header",
  components: { LanguageInputVue },
};
</script>

<template>
  <nav
    class="
      relative
      flex flex-wrap
      items-center
      justify-between
      px-2
      py-3
      bg-violet-500
      mb-3
    "
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="
          w-full
          relative
          flex
          justify-between
          lg:w-auto
          px-4
          lg:static lg:block lg:justify-start
        "
      >
        <a
          class="
            text-sm
            font-bold
            leading-relaxed
            inline-block
            mr-4
            py-2
            whitespace-nowrap
            uppercase
            text-white
          "
        >
          <div>Dashboard</div>
        </a>
        <button
          class="
            text-white
            cursor-pointer
            text-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            lg:hidden
            outline-none
            focus:outline-none
          "
          type="button"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
            >
              <i
                class="
                  fab
                  fa-facebook-square
                  text-lg
                  leading-lg
                  text-white
                  opacity-75
                "
              /><span class="ml-2">Profile</span>
            </a>
          </li>
          <li class="nav-item">
            <div class="ml-4 mt-1">
              <LanguageInputVue />
            </div>
          </li>
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
            >
              <i
                class="fab fa-twitter text-lg leading-lg text-white opacity-75"
              /><span class="ml-2">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
