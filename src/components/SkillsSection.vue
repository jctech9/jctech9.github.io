<script setup lang="ts">
import { skillGroups } from '@/data/skills'
</script>

<template>
  <section id="competencias" class="section section--tinted" aria-labelledby="skills-title">
    <div class="container section-layout">
      <div class="section-intro">
        <p class="section-number" aria-hidden="true">04</p>
        <p class="eyebrow">Competências</p>
        <h2 id="skills-title">Uma base full stack que conversa com operações.</h2>
        <p>Tecnologias utilizadas em experiência profissional, formação e projetos pessoais.</p>
      </div>

      <div class="skills-grid">
        <article v-for="group in skillGroups" :key="group.title" class="skill-group">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
