<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">{{ content.header.navigationHome }}</router-link></li>
      <li><router-link to="/about">{{ content.header.navigationAbout }}</router-link></li>
      <li><router-link to="/projects">{{ content.header.navigationProjects }}</router-link></li>
      <li><router-link to="/contact">{{ content.header.navigationContact }}</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import content from '../../assets/content.json';
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>
