<template>
    <footer class="footer">
      <p>{{ content.footer.footerText }}</p>
      <p>{{ content.footer.footerCreated }}</p>
      <p>{{ content.footer.footerSocial }}</p>
      <div class="social-links">
        <a :href="content.footer.footerSocialLinks.linkedin" target="_blank">LinkedIn</a>
        <a :href="content.footer.footerSocialLinks.github" target="_blank">GitHub</a>
      </div>
    </footer>
  </template>
  
  <script setup>
  import content from '../../assets/content.json';
  </script>
  
  <style scoped>
  .footer {
    text-align: center;
    padding: 1rem;
    background: #222;
    color: white;
    margin-top: 2rem;
  }
  
  .social-links {
    margin-top: 0.5rem;
  }
  
  .social-links a {
    color: #1DA1F2;
    text-decoration: none;
    margin: 0 10px;
    font-weight: bold;
  }
  
  .social-links a:hover {
    text-decoration: underline;
  }
  </style>
  