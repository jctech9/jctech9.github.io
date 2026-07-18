<script setup lang="ts">
import { experience } from '@/data/portfolio'
</script>

<template>
  <section id="experiencia" class="section section--tinted" aria-labelledby="experience-title">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="section-number" aria-hidden="true">02</p>
          <p class="eyebrow">Experiência</p>
          <h2 id="experience-title">Prática em produto real.</h2>
        </div>
        <p>
          Desenvolvimento colaborativo de um sistema web, do levantamento de requisitos à entrega de
          funcionalidades.
        </p>
      </div>

      <article class="experience-card">
        <div class="experience-card__meta">
          <p class="experience-card__period">{{ experience.period }}</p>
          <p class="experience-card__organization">{{ experience.organization }}</p>
        </div>
        <div class="experience-card__content">
          <h3>{{ experience.role }}</h3>
          <ul class="feature-list">
            <li v-for="activity in experience.activities" :key="activity">{{ activity }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
