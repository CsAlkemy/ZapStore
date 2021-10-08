<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div
      class="grid grid-cols-1 md:grid-cols-3 mt-32  gap-y-4 sm:gap-4 rounded-lg"
    >
      <div class="col-span-2  bg-white">
        <h2 class="uppercase text-lg bg-gray-300 p-2 pl-6 ">Product</h2>
        <div class="flex flex-wrap gap-4 py-10 p-4 bg-white">
          <div class="max-w-md">
            <img
              class="h-24 w-auto"
              src="https://agbd.s3.amazonaws.com/media/images/product/None/1527/Graphite_oYYFuYU_n9iZIrS.jpg"
              alt="iphone"
            />
            <div class="mt-3">
              <button class="px-2 bg-red-200 ">-</button>
              <input
                type="text"
                value="2"
                readonly
                class="px-4 w-10 bg-red-300 text-center"
              />
              <button class="px-2 bg-red-200">+</button>
            </div>
          </div>
          <div class="max-w-5xl mr-auto">
            <h4 class="text-xl font-semibold">iphone 100</h4>
            <p class="text-sm">
              Brand: <span class="text-red-400">Apple</span>
            </p>
            <p class="text-sm text-red-400">12/256GB, Blue, Dual</p>
            <p class="mt-5 sm:mt-9 text-gray-500 text-sm md:text-base ">
              Unit Price: 1042000
            </p>
          </div>
          <div class="flex-row">
            <TrashIcon
              class="h-7 w-7 hover:bg-red-50 rounded-full mx-auto cursor-pointer "
            />

            <p class="text-base text-gray-700 mt-5">
              BDT 15552
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-1  bg-white">
        <h2 class="uppercase text-lg bg-gray-300 p-2 text-center ">
          Your Cart ({{ $store.state.counter }})
        </h2>
        <div class="bg-white">
          <p class=" text-xs text-gray-400 p-2 text-center ">
            Start adding Items to your cart
          </p>
          <p class="text-base text-gray-700 mb-2 px-4 uppercase">
            Price Details
          </p>
          <hr />
          <div class="p-4">
            <div class="flex justify-between">
              <p class="text-sm text-gray-600 mb-1">Price</p>
              <p class="text-sm text-gray-700 mb-1">BDT 26400</p>
            </div>
            <div class="flex justify-between">
              <p class="text-sm text-gray-600 mb-1">Delevary Charges</p>
              <p class="text-xs text-gray-500 mb-1">(Will be added)</p>
            </div>
            <hr />
            <div class="flex justify-between">
              <p class="text-base text-gray-800 mb-1">Total Amount</p>
              <p class="text-base text-gray-800 mb-1">BDT 26400</p>
            </div>
            <button
              class="px-4 p-1 bg-gray-900 text-white text-sm hover:text-gray-900 hover:bg-gray-200 mt-5  uppercase"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { TrashIcon } from "@heroicons/vue/outline";

export default {
  name: "Product Details",
  components: {
    TrashIcon,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {},
};
</script>

<style lang="css">
.btn {
  @apply text-sm px-2 cursor-pointer rounded-3xl ring-1 ring-gray-400 focus:ring-red-400 focus:ring-2 hover:bg-gray-300;
}
.circle {
  @apply h-9 w-9 rounded-full ring-2 ring-gray-500 cursor-pointer;
}
</style>
