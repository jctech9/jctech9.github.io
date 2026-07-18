<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__inner">
      <p>© {{ currentYear }} Jones Cabral.</p>
      <p>Construído com Vue 3, TypeScript e atenção aos detalhes.</p>
    </div>
  </footer>
</template>
