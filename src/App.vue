<template>
  <div>
    <Navbar />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Navbar from "../src/components/layout/Navbar.vue";
</script>

<style scoped>
main {
  padding: 2rem;
}
</style>
