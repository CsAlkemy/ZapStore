<template>
  <Navbar />
  <router-view />
</template>

<style></style>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
