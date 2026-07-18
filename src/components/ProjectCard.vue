<script setup lang="ts">
import type { Project } from '@/types/portfolio'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card" data-testid="project-card">
    <div class="project-card__topline">
      <span class="project-card__category">{{ project.category }}</span>
      <span class="external-mark" aria-hidden="true">↗</span>
    </div>

    <h3>{{ project.name }}</h3>
    <p class="project-card__description">{{ project.description }}</p>

    <div class="project-card__result">
      <span>Resultado técnico</span>
      <p>{{ project.result }}</p>
    </div>

    <ul class="tag-list" :aria-label="`Tecnologias de ${project.name}`">
      <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
    </ul>

    <div class="project-card__actions">
      <a class="text-link" :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer">
        Ver código <span aria-hidden="true">↗</span>
        <span class="sr-only"> (abre em nova aba)</span>
      </a>
      <a
        v-if="project.demoUrl"
        class="text-link"
        :href="project.demoUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver projeto <span aria-hidden="true">↗</span>
        <span class="sr-only"> (abre em nova aba)</span>
      </a>
    </div>
  </article>
</template>
