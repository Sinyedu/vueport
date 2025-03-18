<template>
  <div>
    <Navbar />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../src/components/layout/Navbar.vue';
import Footer from '../src/components/layout/Footer.vue';
</script>

<style scoped>
main {
  padding: 2rem;
  min-height: 80vh; 
}
</style>
