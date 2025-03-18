<template>
  <div class="projects">
    <h1>My Projects</h1>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.name" class="project-card">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <ul>
          <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
        </ul>
        <a :href="project.repository" target="_blank">View Repository</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import projects from '../assets/projects.json';
</script>

<style scoped>
.projects {
  text-align: center;
  padding: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.project-card {
  background: #222;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}

.project-card ul {
  list-style: none;
  padding: 0;
}

.project-card li {
  background: #444;
  display: inline-block;
  padding: 0.3rem 0.7rem;
  margin: 0.2rem;
  border-radius: 5px;
}

.project-card a {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: #1DA1F2;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.project-card a:hover {
  background: #0d8bf0;
}
</style>
