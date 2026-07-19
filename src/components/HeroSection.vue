<script setup lang="ts">
defineProps<{
  hasResume: boolean
}>()
</script>

<template>
  <section id="inicio" class="hero section" aria-labelledby="hero-title">
    <div class="hero__grid" aria-hidden="true"></div>
    <div class="container hero__content">
      <div class="hero__copy">
        <p class="eyebrow hero__eyebrow">
          <span class="status-dot" aria-hidden="true"></span>
          Disponível para oportunidades em Full Stack e Automação
        </p>
        <h1 id="hero-title">Desenvolvedor <span>Full Stack</span></h1>
        <p class="hero__positioning">
          Full Stack com Java, Spring Boot e Vue.js <span aria-hidden="true">/</span> Automação com
          Python e GitHub Actions
        </p>
        <p class="hero__summary">
          Atuo em dois eixos: aplicações web completas e automações confiáveis que simplificam
          operações.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="#projetos">Conhecer projetos</a>
          <a class="button button--secondary" href="mailto:jonescabral.tech@gmail.com">
            Entrar em contato
          </a>
          <a
            v-if="hasResume"
            class="button button--text"
            href="/curriculo-jones-cabral.pdf"
            download
          >
            Baixar currículo
          </a>
        </div>
        <p class="hero__location">Quixadá, Ceará, Brasil</p>
      </div>

      <div class="hero__signature" aria-hidden="true">
        <div class="hero__monogram">JC</div>
        <div class="hero__signature-line">
          <span>web</span>
          <span>automation</span>
          <span>infra</span>
        </div>
      </div>
    </div>
  </section>
</template>
