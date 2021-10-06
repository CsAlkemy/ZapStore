<template>
  <div class=" py-4 p-1 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between">
        <div class="flex justify-start lg:w-0 lg:flex-1 gap-x-2">
          <router-link to="/">
            <img
              class="h-10 rounded-xl w-auto sm:h-10"
              :src="Image"
              alt="logo"
            />
          </router-link>
          <h1 class="text-3xl text-white my-auto tracking-widest">
            Apple Store
          </h1>
        </div>
        <router-link
          to="cart"
          class="my-auto"
          exact
          exact-active-class="bg-green-500 p-1 rounded-full"
        >
          <ShoppingCartIcon class="h-7 w-7 text-white" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { ShoppingCartIcon } from "@heroicons/vue/outline";

export default {
  components: {
    ShoppingCartIcon,
  },
  setup() {
    return {
      Image: require("@/assets/logo.png"),
    };
  },
};
</script>
<style lang=""></style>
