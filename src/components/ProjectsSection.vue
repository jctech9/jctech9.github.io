<script setup lang="ts">
import { computed, ref } from 'vue'

import { featuredTechnologies, projectCategories, projects } from '@/data/projects'

import ProjectCard from './ProjectCard.vue'

const selectedCategory = ref('Todos')
const selectedTechnology = ref('Todas')

const filteredProjects = computed(() =>
  projects.filter((project) => {
    const matchesCategory =
      selectedCategory.value === 'Todos' || project.category === selectedCategory.value
    const matchesTechnology =
      selectedTechnology.value === 'Todas' ||
      project.technologies.includes(selectedTechnology.value)
    return matchesCategory && matchesTechnology
  }),
)

const clearFilters = (): void => {
  selectedCategory.value = 'Todos'
  selectedTechnology.value = 'Todas'
}
</script>

<template>
  <section id="projetos" class="section" aria-labelledby="projects-title">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="section-number" aria-hidden="true">03</p>
          <p class="eyebrow">Projetos selecionados</p>
          <h2 id="projects-title">Código aplicado a problemas concretos.</h2>
        </div>
        <p>
          Projetos organizados em dois eixos principais: desenvolvimento Full Stack e automação,
          complementados por infraestrutura documentada em repositórios públicos.
        </p>
      </div>

      <div class="project-filters" aria-label="Filtros de projetos">
        <label>
          <span>Categoria</span>
          <select v-model="selectedCategory" data-testid="category-filter">
            <option v-for="category in projectCategories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </label>
        <label>
          <span>Tecnologia</span>
          <select v-model="selectedTechnology" data-testid="technology-filter">
            <option
              v-for="technology in featuredTechnologies"
              :key="technology"
              :value="technology"
            >
              {{ technology }}
            </option>
          </select>
        </label>
        <button
          v-if="selectedCategory !== 'Todos' || selectedTechnology !== 'Todas'"
          class="button button--text filter-reset"
          type="button"
          @click="clearFilters"
        >
          Limpar filtros
        </button>
      </div>

      <p class="filter-status sr-only" aria-live="polite">
        {{ filteredProjects.length }} projeto(s) encontrado(s).
      </p>

      <div v-if="filteredProjects.length" class="projects-grid">
        <ProjectCard v-for="project in filteredProjects" :key="project.name" :project="project" />
      </div>
      <div v-else class="empty-state">
        <p>Nenhum projeto corresponde aos filtros selecionados.</p>
        <button class="button button--secondary" type="button" @click="clearFilters">
          Exibir todos
        </button>
      </div>
    </div>
  </section>
</template>
