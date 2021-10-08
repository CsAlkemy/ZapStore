<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 mt-32 bg-white py-10 rounded-lg"
    >
      <div>
        <img
          src="https://agbd.s3.amazonaws.com/media/images/product/None/1527/Graphite_oYYFuYU_n9iZIrS.jpg"
          alt="iphone"
          class="max-h-96 h-96 w-full object-scale-down"
        />
      </div>
      <div class="p-5">
        <h2 class="text-2xl font-bold tracking-wide my-1">iPhone 13 Pro Max</h2>
        <h5 class="text-xl text-gray-500 font-medium">Tk. 104225</h5>
        <div class="flex gap-2 my-1">
          <input type="checkbox" name="emi" id="emi" class="my-auto" />
          <p class="text-gray-500 text-sm my-auto">
            Avilable EMI Offer
            <span class="text-yellow-700"><a href="#">View Plan</a></span>
          </p>
        </div>
        <hr class="my-4" />
        <form action="">
          <div class="flex flex-wrap gap-2 my-4">
            <h4 class="text-base my-auto w-20">Storage:</h4>
            <div>
              <input class="hidden" id="s1" type="radio" name="storage" />
              <label class="flex flex-col  btn" for="s1">
                512GB
              </label>
            </div>
            <div>
              <input class="hidden" id="s" type="radio" name="storage" />
              <label class="flex flex-col  btn" for="s">
                128GB
              </label>
            </div>
          </div>
        </form>
        <form action="">
          <div class="flex flex-wrap gap-2 my-4">
            <h4 class="text-base my-auto w-20">Color:</h4>
            <div>
              <input class="hidden" id="c1" type="radio" name="color" />
              <label
                class="flex flex-col  h-7 w-7 rounded-full border-2 border-gray-400 cursor-pointer "
                for="c1"
              >
              </label>
            </div>
          </div>
        </form>
        <form action="">
          <div class="flex flex-wrap gap-2 my-4">
            <h4 class="text-base my-auto w-20">Sim:</h4>
            <div>
              <input class="hidden" id="si1" type="radio" name="sim" />
              <label class="flex flex-col  btn" for="si1">
                Dual
              </label>
            </div>
          </div>
        </form>
        <form action="">
          <div class="flex flex-wrap gap-2 my-4">
            <h4 class="text-base my-auto w-20">Region:</h4>
            <div>
              <input class="hidden" id="r1" type="radio" name="region" />
              <label class="flex flex-col  btn" for="r1">
                USA
              </label>
            </div>
          </div>
        </form>
        <button
          class="p-2 bg-gray-900 text-white hover:text-gray-900 hover:bg-gray-200 mt-5 rounded-md px-3"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Product Details",
  computed: mapGetters(["allCombination"]),
  created() {
    this.getCombinationData();
  },
  methods: {
    ...mapActions(["getCombinationData"]),
  },
  setup() {
    return {};
  },
};
</script>

<style lang="css">
.btn {
  @apply text-sm px-2 cursor-pointer rounded-3xl ring-1 ring-gray-400 focus:ring-red-400 focus:ring-2 hover:bg-gray-300;
}
.circle {
  @apply h-9 w-9 rounded-full ring-2 ring-gray-500 cursor-pointer;
}

input:checked + label {
  border-color: chocolate;
  background-color: gray;
  color: black;
}
</style>
