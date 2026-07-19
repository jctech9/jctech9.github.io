<script setup lang="ts">
import { contactLinks } from '@/data/portfolio'
</script>

<template>
  <section id="contato" class="section contact-section" aria-labelledby="contact-title">
    <div class="container contact-card">
      <div>
        <p class="section-number" aria-hidden="true">06</p>
        <p class="eyebrow">Contato</p>
        <h2 id="contact-title">Vamos conversar sobre a próxima entrega.</h2>
        <p>
          Estou aberto a oportunidades em desenvolvimento Full Stack e automação, além de projetos
          nos quais Linux, redes e infraestrutura agreguem valor.
        </p>
      </div>

      <div class="contact-card__actions">
        <a class="button button--primary" href="mailto:jonescabral.tech@gmail.com">
          Enviar e-mail
        </a>
        <a class="contact-email" href="mailto:jonescabral.tech@gmail.com">
          jonescabral.tech@gmail.com
        </a>
        <div class="contact-links">
          <a
            v-for="link in contactLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.label }} <span aria-hidden="true">↗</span>
            <span class="sr-only"> (abre em nova aba)</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
