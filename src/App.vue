<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

import AboutSection from '@/components/AboutSection.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import ContactSection from '@/components/ContactSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { useTheme } from '@/composables/useTheme'
import { navigationLinks } from '@/data/navigation'

const { theme, toggleTheme } = useTheme()
const { activeSection } = useActiveSection(navigationLinks.map((link) => link.id))
const showBackToTop = ref(false)
const hasPublicResume = __HAS_PUBLIC_RESUME__

const handleScroll = (): void => {
  showBackToTop.value = window.scrollY > 700
}

const backToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <AppHeader
    :links="navigationLinks"
    :active-section="activeSection"
    :theme="theme"
    @toggle-theme="toggleTheme"
  />

  <main id="conteudo">
    <HeroSection :has-resume="hasPublicResume" />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
  </main>

  <AppFooter />

  <Transition name="fade">
    <button
      v-if="showBackToTop"
      class="back-to-top"
      type="button"
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      @click="backToTop"
    >
      <span aria-hidden="true">↑</span>
    </button>
  </Transition>
</template>
