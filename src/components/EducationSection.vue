<script setup lang="ts">
import { education, languages } from '@/data/portfolio'
</script>

<template>
  <section id="formacao" class="section" aria-labelledby="education-title">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="section-number" aria-hidden="true">05</p>
          <p class="eyebrow">Formação</p>
          <h2 id="education-title">Fundamentos em evolução contínua.</h2>
        </div>
      </div>

      <div class="education-layout">
        <div class="timeline">
          <article v-for="item in education" :key="item.course" class="timeline__item">
            <div class="timeline__marker" aria-hidden="true"></div>
            <p class="timeline__period">{{ item.period }}</p>
            <h3>{{ item.course }}</h3>
            <p>{{ item.institution }}</p>
          </article>
        </div>

        <aside class="languages-card" aria-labelledby="languages-title">
          <p class="eyebrow">Idiomas</p>
          <h3 id="languages-title">Comunicação</h3>
          <dl>
            <div v-for="language in languages" :key="language.name">
              <dt>{{ language.name }}</dt>
              <dd>{{ language.level }}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  </section>
</template>
