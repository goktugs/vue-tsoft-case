<script>
</script>

<template >
  <div
    class="
      relative
      flex flex-col
      justify-center
      min-h-screen
      overflow-hidden
      bg-[url('../static/bg_login.png')]
      bg-no-repeat bg-cover
    "
  >
    <div
      class="
        w-full
        p-6
        m-auto
        bg-transparent
        border-t border-purple-600
        rounded
        shadow-lg shadow-purple-800/50
        lg:max-w-md
      "
    >
      <h1 class="text-3xl font-semibold text-center text-white">LOGO</h1>

      <form class="mt-6">
        <div>
          <label for="email" class="block text-sm text-white">Email</label>
          <input
            type="email"
            class="
              block
              w-full
              px-4
              py-2
              mt-2
              text-purple-700
              bg-purple-400
              border
              rounded-md
              focus:border-purple-400
              focus:ring-purple-300
              focus:outline-none
              focus:ring
              focus:ring-opacity-40
            "
          />
        </div>
        <div class="mt-4">
          <div>
            <label for="password" class="block text-sm text-white"
              >Password</label
            >
            <input
              type="password"
              class="
                block
                w-full
                px-4
                py-2
                mt-2
                text-purple-700
                bg-purple-400
                border
                rounded-md
                focus:border-purple-400
                focus:ring-purple-300
                focus:outline-none
                focus:ring
                focus:ring-opacity-40
              "
            />
          </div>

          <div class="mt-6">
            <button
              class="
                w-full
                px-4
                py-2
                tracking-wide
                text-white
                transition-colors
                duration-200
                transform
                bg-purple-700
                rounded-md
                hover:bg-purple-600
                focus:outline-none focus:bg-purple-600
              "
              @click="login"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <p class="mt-8 text-xs font-light text-center text-white">
        Don't have an account?
        <NuxtLink to="/register" class="font-medium text-white hover:underline">
          Sign up
        </NuxtLink>
      </p>
    </div>
  </div>
</template>


