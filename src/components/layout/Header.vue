<template>
    <div>
      <button>{{ content.button.buttonSignUp }}</button>
      <header>
        <h1>{{ content.header.siteTitle }}</h1>
        <nav>
          <ul>
            <li>{{ content.header.navigationHome }}</li>
            <li>{{ content.header.navigationAbout }}</li>
          </ul>
        </nav>
      </header>
    </div>
  </template>
  
  <script>
  import content from '@/assets/content.json';
  
  export default {
    data() {
      return {
        content
      };
    }
  };
  </script>
  